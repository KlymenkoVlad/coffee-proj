import { useState } from 'react'

import AboutUs from '../about-us/about-us'
import Footer from '../footer/footer'
import Header from '../header/header'
import OurBest from '../our-best/our-best'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

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
