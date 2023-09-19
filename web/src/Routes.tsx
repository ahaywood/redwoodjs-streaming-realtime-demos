import { Router, Route, Set } from '@redwoodjs/router'

import DemoLayout from './layouts/DemoLayout/DemoLayout'
import AuctionPage from './pages/AuctionPage/AuctionPage'
import BedtimeStoryPage from './pages/BedtimeStoryPage/BedtimeStoryPage'
import ChatPage from './pages/ChatPage/ChatPage'
import CountdownPage from './pages/CountdownPage/CountdownPage'
import MovieMashupPage from './pages/MovieMashupPage/MovieMashupPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/table-of-contents" page={TableOfContentsPage} name="tableOfContents" />
      <Set wrap={DemoLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/auction/{id}" page={AuctionPage} name="auction" />
        <Route path="/bedtime-story" page={BedtimeStoryPage} name="bedtimeStory" />
        <Route path="/chat" page={ChatPage} name="chat" />
        <Route path="/countdown" page={CountdownPage} name="countdown" />
        <Route path="/movie-mashup" page={MovieMashupPage} name="movieMashup" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
