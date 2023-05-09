import { useState } from 'react'
import './App.css'
import Navbar from './comp/navbar/navbar'
import SimpleImageSlider from "react-simple-image-slider";

function App() {
  const sliderImages = [
    {
      url: "https://ticketasa.gt/wp-content/uploads/2023/04/Slider-3-scaled.jpg",
    },
    {
      url: "https://ticketasa.gt/wp-content/uploads/2023/04/Slider-2-scaled.jpg",
    },
    {
       url: "https://ticketasa.gt/wp-content/uploads/2023/02/SLIDER-1.png",
    },
    {
       url: "https://ticketasa.gt/wp-content/uploads/2023/04/Slider-1-scaled.jpg",
    },
    {
       url: "https://ticketasa.gt/wp-content/uploads/2022/12/PoratadaWeb-scaled.jpg",
    },
 ];
  return (
      <div className="App">
      <Navbar />
      <SimpleImageSlider
         width={1470}
         height={560}
         images={sliderImages}
         showNavs={true}
      />
      </div>
    
  )
}

export default App
