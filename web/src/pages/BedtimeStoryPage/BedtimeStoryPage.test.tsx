import { render } from '@redwoodjs/testing/web'

import BedtimeStoryPage from './BedtimeStoryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BedtimeStoryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BedtimeStoryPage />)
    }).not.toThrow()
  })
})
