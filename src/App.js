import { useState, useEffect } from 'react'
import './App.css'
import { MemorizedFeature } from './components/Feature'
import Header from './components/Header'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import Services from './components/Services'
import About from './components/About'
import ContactUs from './components/ContactUs';
import Portfolio from './components/Portfolio'
import FandQ from './components/FandQ'
import Testimonial from './components/Testimonial'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

function App() {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll(".js-show-on-scroll");
    const img = document.getElementById("aboutImg")
// Callback for IntersectionObserver
const callback = function(entries) {
  entries.forEach(entry => {

    // Is the element in the viewport?
    if (entry.isIntersecting) {
      console.log(entry.target);
      if(entry.target=== img){
        entry.target.classList.add("ani");
        entry.target.classList.add("motion-safe:animate-fadeIn");

      }else{
         entry.target.classList.add("motion-safe:animate-fadeIn");
      }
      // Add the fadeIn class:
     
    } else {

      // Otherwise remove the fadein class
      entry.target.classList.remove("motion-safe:animate-fadeIn");
      entry.target.classList.remove("ani");
    }
  });
};
// Set up a new observer
const observer = new IntersectionObserver(callback);

// Loop through each of the target
targets.forEach(function(target) {
  // Hide the element
  // target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});


    // return () => {
    //   cleanup
    // }
  }, [])
  return (
    <div >
     <Header/>
     <Services data={landingPageData.Services}  />
     <About data={landingPageData.About} />
     <MemorizedFeature data={landingPageData.Features}/>
     <Portfolio data={landingPageData.portfolio}/>
     <Testimonial data={landingPageData.Testimonials}/>
     <FandQ data={landingPageData.FAQs} />
    <ContactUs data={landingPageData.Contact}/>
    
     
     
    </div>
  )
}

export default App
