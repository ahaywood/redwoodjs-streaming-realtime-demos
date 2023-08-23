import type {
  Adjective,
  Animal,
  Color,
  Activity,
  StoryInput,
} from 'types/graphql'

import { ADJECTIVES, ANIMALS, COLORS, ACTIVITIES } from './data/stories'

export const buildStoryId = (input: StoryInput) => {
  return [
    'animal',
    input.animalId,
    'color',
    input.colorId,
    'activity',
    input.activityId,
    'adjective',
    input.adjectiveId,
  ].join('|')
}
export class Animals {
  private animals: Animal[] = ANIMALS

  get(id: string): Animal | undefined {
    return this.animals.find((animal) => animal.id === id)
  }

  all(): Animal[] {
    return this.animals
  }
}

export class Colors {
  private colors: Color[] = COLORS

  get(id: string): Color | undefined {
    return this.colors.find((color) => color.id === id)
  }

  all(): Color[] {
    return this.colors
  }
}

export class Activities {
  private activities: Activity[] = ACTIVITIES

  get(id: string): Activity | undefined {
    return this.activities.find((activity) => activity.id === id)
  }

  all(): Activity[] {
    return this.activities
  }
}

export class Adjectives {
  private adjectives: Adjective[] = ADJECTIVES

  get(id: string): Adjective | undefined {
    return this.adjectives.find((adjective) => adjective.id === id)
  }

  all(): Adjective[] {
    return this.adjectives
  }
}
