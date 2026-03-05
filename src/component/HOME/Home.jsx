import React from 'react'
import Home1 from './home1';
import Contact from './Contact';
import Footer from './footer';
import About from './About-us';
import Feature from './FeatureSection';


function Home() {
  return (
    <div className="pt-14 ">

    <div>
     <Home1/>
     <About/>
     <Feature/>
     <Contact/>
     <Footer/>
    </div>
         </div>
  )
}

export default Home
