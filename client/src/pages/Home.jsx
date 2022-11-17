import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-blue-200">
    <Navbar/>
    <Intro/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home