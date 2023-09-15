import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Page from 'src/components/BedtimeStories/Page/Page'

const BedtimeStoryPage = () => {
  const firstPage = 2
  const totalPages = 6
  const [currentPage, setCurrentPage] = useState(firstPage)

  const flipToNextPage = () => {
    if (currentPage === totalPages) return
    // flip page

    // update state
    setCurrentPage((preValue) => preValue + 1)
  }

  const flipToPrevPage = () => {
    if (currentPage === 1) return
    setCurrentPage((preValue) => preValue - 1)
  }

  return (
    <div className="h-screen w-screen bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <MetaTags title="Bedtime Story" description="Bedtime Story page" />
      <div className="center">
        <div className="relative h-[870px] w-[1280px]">
          <img
            src="/images/book.png"
            alt="Book"
            className="h-[870px] w-[1280px] max-w-[1280px]"
          />
          <div className="book absolute left-[631px] top-[100px]">
            <Page currentPage={currentPage} pageNumber={6}>
              <div className="story">
                <div className="h-[518px] overflow-y-scroll pr-4">
                  <p>
                    Once upon a time, Quis exercitation anim ipsum sint magna
                    ullamco esse aliqua consequat nostrud sunt id sit. Ea
                    pariatur occaecat culpa nulla aliqua eiusmod sint fugiat
                    amet in irure tempor. Occaecat id irure laboris officia
                    velit laboris pariatur non commodo est dolore commodo.
                  </p>
                  <p>
                    In amet tempor tempor do ea sint. Lorem exercitation nostrud
                    dolore. Aute ipsum consequat pariatur exercitation commodo
                    mollit. Exercitation nulla ea et aliquip sunt ex eu pariatur
                    velit qui magna. Ut consequat ipsum enim esse laborum quis
                    enim officia consectetur consectetur laborum cupidatat
                    occaecat.
                  </p>

                  <p>
                    In amet tempor tempor do ea sint. Lorem exercitation nostrud
                    dolore. Aute ipsum consequat pariatur exercitation commodo
                    mollit. Exercitation nulla ea et aliquip sunt ex eu pariatur
                    velit qui magna. Ut consequat ipsum enim esse laborum quis
                    enim officia consectetur consectetur laborum cupidatat
                    occaecat.
                  </p>
                </div>
              </div>
            </Page>
            <Page currentPage={currentPage} pageNumber={5}>
              <h2>{'Page 5'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={4}>
              <h2>{'Page 4'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={3}>
              <h2>{'Page 3'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={2}>
              <>
                <h2>Pick an adjective</h2>
                <div className="story-choices">
                  <button>adventurous</button>
                  <button className="selected">amazing</button>
                  <button>complicated</button>
                  <button>crazy</button>
                  <button>educational</button>
                  <button>exciting</button>
                  <button>fancy</button>
                  <button>funny</button>
                  <button>happy</button>
                  <button>honest</button>
                  <button>magical</button>
                  <button>mysterious</button>
                  <button>sad</button>
                  <button>scary</button>
                  <button>spooky</button>
                  <button>strange</button>
                  <button>weird</button>
                  <button>wonderful</button>
                </div>
              </>
            </Page>
            <Page currentPage={currentPage} pageNumber={1} />
          </div>
          {currentPage > firstPage && (
            <button
              onClick={flipToPrevPage}
              className="pagination absolute bottom-[83px] left-[182px] z-[100] h-[86px] w-[82px] cursor-pointer pl-2 pt-6 mix-blend-multiply hover:bg-[url('/images/triangle--left.svg')]"
            >
              <img src="/images/arrow--left.svg" alt="Previous Page" />
            </button>
          )}
          {currentPage < totalPages && (
            <button
              onClick={flipToNextPage}
              className="pagination absolute bottom-[84px] right-[200px] z-[100] h-[86px] w-[82px] cursor-pointer pr-2 pt-6 mix-blend-multiply hover:bg-[url('/images/triangle--right.svg')]"
            >
              <img
                src="/images/arrow--left.svg"
                alt="Next Page"
                className="float-right rotate-180"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BedtimeStoryPage
