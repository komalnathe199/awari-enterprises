import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      disable: 'mobile' // Disables animations on mobile devices
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}

export default App
