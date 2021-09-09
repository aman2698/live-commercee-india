import { useState, useEffect } from 'react'
import './App.css'
import { MemorizedFeature } from './components/Feature'
import Header from './components/Header'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import Services from './components/Services'
import About from './components/About'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

function App() {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  return (
    <div className=''>
      <Header />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <MemorizedFeature data={landingPageData.Features} />
    </div>
  )
}

export default App
