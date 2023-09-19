import { MetaTags } from '@redwoodjs/web'

import GitHubCorner from 'src/components/GitHubCorner/GitHubCorner'

const TableOfContentsPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS Realtime Demos"
        description="This page showcases several demos featuring RedwoodJS GraphQL Live Queries and Subscriptions."
      />

      <div className="grid min-h-screen w-screen grid-cols-12 gap-x-5">
        <a
          href="https://github.com/redwoodjs/redwoodjs-streaming-realtime-demos"
          target="_blank"
          rel="noreferrer"
          className="absolute right-0 top-0 z-grid text-caribbeanGreen"
        >
          <GitHubCorner />
        </a>
        <div className="toc__content col-span-8 h-screen overflow-y-scroll px-[100px] pt-[130px]">
          <div className="absolute left-3 top-3">
            <a href="https://redwoodjs.com">
              <img src="/images/redwoodjs__black.svg" alt="RedwoodJS" />
            </a>
          </div>

          <h1>RedwoodJS Realtime</h1>
          <p>
            One of the most often asked questions of RedwoodJS before and after
            the launch for V1 was, “When will RedwoodJS support a realtime
            solution?”
          </p>
          <p>
            The answer is: <strong>now.</strong>
          </p>
          <h2>What is RealTime?</h2>
          <p>
            Sit dolor deserunt sint sint enim tempor magna aliqua voluptate non.
            Irure cillum occaecat ut laboris in id irure id qui pariatur ex
            proident. Aliquip nostrud elit in ad aliqua amet. Aliqua enim
            aliquip eu do id eu do. Aliqua aute do officia ex. Quis ea esse
            aliqua nulla esse. Elit non proident culpa voluptate amet laboris.
          </p>

          <p>
            Reprehenderit magna Lorem laborum enim laborum commodo dolore ipsum
            do Lorem nisi ad et quis consectetur. Velit magna pariatur cupidatat
            laborum mollit laboris. Quis nisi proident voluptate deserunt
            excepteur eu ut minim officia cillum minim duis. Ut velit do
            deserunt consequat officia deserunt et ipsum quis adipisicing.
          </p>

          <p>
            Irure fugiat excepteur voluptate. Eu aliqua qui dolore nulla anim
            pariatur dolore occaecat culpa nulla fugiat ullamco. Aliquip labore
            et incididunt officia sint incididunt exercitation in ad ad nulla
            voluptate. Do et enim eiusmod. Incididunt adipisicing et officia
            ipsum non ullamco cillum voluptate reprehenderit Lorem voluptate
            occaecat tempor sint nisi. Cupidatat fugiat quis voluptate
            incididunt in veniam.
          </p>
        </div>
        <div className="col-span-4 h-screen overflow-y-scroll bg-black pt-[100px] text-center">
          <img
            src="/images/table-of-contents.svg"
            alt="Table of Contents"
            className="mx-auto mb-8"
          />

          <ul className="mx-auto w-[240px] text-left">
            <li className="mb-6">
              <h4 className="font-sans text-xl font-bold text-caribbeanGreen">
                Chat
              </h4>
              <p className="font-mono font-bold text-white">Subscription</p>
            </li>
            <li className="mb-6">
              <h4 className="font-sans text-xl font-bold text-caribbeanGreen">
                Auction
              </h4>
              <p className="font-mono font-bold text-white">Live Query</p>
            </li>
            <li className="mb-6">
              <h4 className="font-sans text-xl font-bold text-caribbeanGreen">
                Countdown Timer
              </h4>
              <p className="font-mono font-bold text-white">Streaming</p>
            </li>
            <li className="mb-6">
              <h4 className="font-sans text-xl font-bold text-caribbeanGreen">
                Bedtime Story AI
              </h4>
              <p className="font-mono font-bold text-white">Subscription</p>
            </li>
            <li className="mb-6">
              <h4 className="font-sans text-xl font-bold text-caribbeanGreen">
                Movie Mashup AI
              </h4>
              <p className="font-mono font-bold text-white">Live Query</p>
            </li>
            <li className="mb-6">
              <h4 className="font-sans text-xl font-bold text-caribbeanGreen">
                Chat
              </h4>
              <p className="font-mono font-bold text-white">Subscription</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TableOfContentsPage
