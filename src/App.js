import {useState,useEffect} from 'react'
import './App.css';
import Feature from './components/Feature';
import Header from './components/Header';
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
}); 

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="">
     <Header/>
     <Feature data={landingPageData.Features}/>
    </div>
  );
}

export default App;
