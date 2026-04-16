import React from "react";
import Sidebar from "../Sidebar";
import Header from "./Header";
import WelcomeBox from "./WelcomeBox";
import Cards from "./cards";
import UpcomingSession from "./UpcomingSession";
import RevenueChart from "./RevenueChart";
import PaymentList from "./PaymentList";
import ExistingInstructor from "./Existing/ExistingInstructor";
import Appoinment from "./Appointment";
import RecentInstructor from "./RecentInstructor";

import StatsCards from "./StatsCards";
import ActiveStatusChart from "./MostActive";
import TotalUsersChart from "./EarningChart";
import MemberSummary from "./MemberSummary/MemberSummary";

export default function Dashboard() {
  return (
    <>
    {/* <Slidebar/> */}
      <main className="flex-1 p-4 overflow-auto ">
        <Header />
        {/* <WelcomeBox /> */}
        <Cards/>
        <UpcomingSession/>
        <RevenueChart/>
<PaymentList/>
<ExistingInstructor/>
<Appoinment/>
<RecentInstructor/>

        {/* <StatsCards />
        <div className="flex flex-col-2 gap-6">
          <TotalUsersChart />
          <ActiveStatusChart />
        </div>
       <MemberSummary /> */}

      </main>
    </>
  );
}
