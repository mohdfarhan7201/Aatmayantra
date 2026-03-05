import React from 'react'
import Carrier1 from './carrier1';
import Whyjoinus from './WhyJoinUs';
import Jobsection from './JobSection';
import Lifeat from './Life_at';
import Footer from '../HOME/footer';


function Home() {
  return (
    <div className="pt-14">

    <div>
     <Carrier1/>
     <Whyjoinus/>
     <Jobsection/>
     <Lifeat/>
     <Footer/>
    </div>
         </div>
  )
}

export default Home
