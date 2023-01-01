import React from 'react'
import AboutCard from '../about/AboutCard'
import Footer from '../common/footer/Footer'
import HAbout from './HAbout'
import Hero from './hero/Hero'
import HPrice from './HPrice'
import Test from './testimonial/Test'
function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <HPrice />
      <Footer />
    </>
  )
}

export default Home
