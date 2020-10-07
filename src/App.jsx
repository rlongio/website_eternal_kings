import React from 'react'
import './styles/main.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Mission from './components/Mission'
import Carousel from './components/Carousel'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App () {
  return (
    <div>
      <Navbar />
      <Header />
      <Mission />
      <Carousel />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
