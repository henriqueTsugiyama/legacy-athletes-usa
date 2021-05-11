import { useState, useEffect } from 'react'
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
import englishData from './data/en_data.json'
import spanishData from './data/spa_data.json'
import SmoothScroll from 'smooth-scroll'
import { useMessages } from './translations/';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  let lang = localStorage.getItem('lang');
  const { getMessage } = useMessages();

  
  useEffect(() => {
    setLandingPageData(getMessage());
    
  }, [lang])

  return (
    <div>
      <Navigation data={landingPageData.Header} />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Questionnaire />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      <Gallery />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
