import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import { Questionnaire } from './components/Questionnaire'
import SmoothScroll from 'smooth-scroll'
import { useMessages } from './translations/';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const lang = useSelector(state => state);
  const { getMessage } = useMessages();
  const messages = getMessage();
  useEffect(() => {
    console.log(messages)
  }, [lang])

  return (
    <div>
      <Navigation data={messages.Navigation} />
      <Header data={messages.Header} />
      <Features data={messages} />
      {/* <Questionnaire /> */}
      <About data={messages.About} />
      {/* <Services data={messages.Services} /> */}
      <Gallery data={messages} />
      {/* <Testimonials data={messages.Testimonials} /> */}
      {/* <Team data={messages.Team} /> */}
      <Contact data={messages.Contact} />
    </div>
  )
}

export default App
