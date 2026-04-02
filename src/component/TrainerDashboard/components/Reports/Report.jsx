import React from 'react'
import Header from "./Header";
import StatusCard from "./Statuscard";
import Charts from "./UseTogetherChart/UseTogether";
import MemberReport from "./MemberReport/ReportMember";

function Instructor() {
  return (
    <div>
      <Header/>
      <StatusCard/>
      <Charts/>
      <MemberReport/>
    </div>
  )
}

export default Instructor
