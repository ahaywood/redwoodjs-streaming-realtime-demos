import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Page from 'src/components/BedtimeStories/Page/Page'

const BedtimeStoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const flipToNextPage = () => {
    if (currentPage === 6) return
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
        <div className="relative">
          <img src="/images/book.png" alt="Book" />
          <div className="absolute left-[631px] top-[100px]">
            <Page currentPage={currentPage} pageNumber={1}>
              <h2>{'Page 1'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={2}>
              <h2>{'Page 2'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={3}>
              <h2>{'Page 3'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={4}>
              <h2>{'Page 4'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={5}>
              <h2>{'Page 5'}</h2>
            </Page>
            <Page currentPage={currentPage} pageNumber={6}>
              <h2>{'Page 6'}</h2>
            </Page>
          </div>

          <button onClick={flipToPrevPage}>Prev Page</button>
          <button onClick={flipToNextPage}>Next Page</button>
          {currentPage}
        </div>
      </div>
    </div>
  )
}

export default BedtimeStoryPage
