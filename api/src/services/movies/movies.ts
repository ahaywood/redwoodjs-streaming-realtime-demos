import OpenAI from 'openai'

import type { LiveQueryStorageMechanism } from '@redwoodjs/realtime'

import { logger } from 'src/lib/logger'

const MOVIES = [
  {
    id: '11-star-wars',
    title: 'Star Wars',
    photo:
      'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
  },
  {
    id: '12-finding-nemo',
    title: 'Finding Nemo',
    photo:
      'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg',
  },
]

const MOVIE_MASHUP_STREAMS = []

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const movies = () => {
  return MOVIES
}

export const movie = ({ id }) => {
  return MOVIES.find((movie) => movie.id === id)
}

export const movieMashup = async ({ input }) => {
  const firstMovie = MOVIES.find((movie) => movie.id === input.firstMovieId)
  const secondMovie = MOVIES.find((movie) => movie.id === input.secondMovieId)

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'Propose a short new movie treatment in the style of a movie trailer advertisement voice over by mashing up the plots, characters, their names, and themes of two existing movies.\n\nGive the new movie a title and tagline that could be used on a movie poster.\n\nThe treatment should be no longer than 3 sentences.\n\nReturn the title, tagline, and treatment of the new movie as JSON.',
      },
      {
        role: 'user',
        content: `Movie 1: ${firstMovie.title}\nMovie 2: ${secondMovie.title}`,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  logger.debug({ response }, 'OpenAI response')

  const { content } = response.choices[0].message

  logger.debug({ content }, 'OpenAI content')

  return {
    firstMovie,
    secondMovie,
    mashup: JSON.parse(content),
  }
}

export const movieMashupStream = async (
  { input },
  { context }: { context: { liveQueryStore: LiveQueryStorageMechanism } }
) => {
  const firstMovie = MOVIES.find((movie) => movie.id === input.firstMovieId)
  const secondMovie = MOVIES.find((movie) => movie.id === input.secondMovieId)

  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'Propose a short new movie treatment in the style of a movie trailer advertisement voice over by mashing up the plots, characters, their names, and themes of two existing movies.\n\nGive the new movie a title and tagline that could be used on a movie poster.\n\nThe treatment should be no longer than 3 sentences.\n\nReturn the title, tagline, and treatment of the new movie as text with labels Title, Tagline, and Treatment.',
      },
      {
        role: 'user',
        content: `Movie 1: ${firstMovie.title}\nMovie 2: ${secondMovie.title}`,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
  })

  const chunk = ''

  const id = `${firstMovie.id}|${secondMovie.id}`

  const streamingMashup = MOVIE_MASHUP_STREAMS.find(
    (mashup) => mashup.key === id
  )

  if (!streamingMashup) {
    MOVIE_MASHUP_STREAMS[id] = {
      id,
      firstMovie,
      secondMovie,
      mashup: { firstMovie, secondMovie, chunk },
    }
  }

  for await (const part of stream) {
    // logger.debug({ part }, 'OpenAI stream part')
    const { content } = part.choices[0].delta
    logger.debug({ content }, 'OpenAI stream part')
    MOVIE_MASHUP_STREAMS[id].mashup.chunk += content
    logger.debug(
      { id, mashup: MOVIE_MASHUP_STREAMS[id] },
      'Invalidating movie mashup key'
    )

    context.liveQueryStore.invalidate(`MovieMashupStream:${id}`)
  }

  logger.debug({ chunk }, 'Mashup chunk')

  return {
    id,
    firstMovie,
    secondMovie,
    mashup: { firstMovie, secondMovie, chunk },
  }
}

export const mashup = async ({ input }) => {
  const firstMovie = MOVIES.find((movie) => movie.id === input.firstMovieId)
  const secondMovie = MOVIES.find((movie) => movie.id === input.secondMovieId)
  const id = `${firstMovie.id}|${secondMovie.id}`

  let streamingMashup = MOVIE_MASHUP_STREAMS[id]

  if (!streamingMashup) {
    MOVIE_MASHUP_STREAMS[id] = {
      id,
      firstMovie,
      secondMovie,
      mashup: { firstMovie, secondMovie, chunk: '' },
    }
  }

  streamingMashup = MOVIE_MASHUP_STREAMS[id]

  logger.debug(
    { id, mashup: MOVIE_MASHUP_STREAMS[id] },
    'Listening to movie mashup key'
  )

  return streamingMashup
}