import React from 'react'
import About1 from './About1';
import CourseGallery from './CourseGallery';
import FeedbackSection from './FeedbackSection';
import JourneySection from './JourneySection';
import TeamMembers from './TeamMembers';
import Footer from '../HOME/footer';


function About() {
  return (
    <div className="pt-14 ">

    <About1 />
    <CourseGallery />
    <FeedbackSection />
    <TeamMembers />
    <JourneySection />
    <Footer />
  
    </div>
  )
}

export default About
