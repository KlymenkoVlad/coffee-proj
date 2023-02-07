import { useState } from 'react'

import AboutUs from '../about-us/about-us'
import Footer from '../footer/footer'
import Header from '../header/header'
import OurBest from '../our-best/our-best'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <OurBest/>
      <Footer/>
    </div>


  )
}

export default App
