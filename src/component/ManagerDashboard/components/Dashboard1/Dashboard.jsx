import React from "react";
import Sidebar from "../Sidebar";
import Header from "./Header";
import WelcomeBox from "./WelcomeBox";
import StatsCards from "./StatsCards";
import ActiveStatusChart from "./MostActive";
import TotalUsersChart from "./EarningChart";
import MemberSummary from "./MemberSummary/MemberSummary";
import Slidebar from "../Sidebar";
import Cards from "./cards";

export default function Dashboard() {
  return (
    <>
    {/* <Slidebar/> */}
      <main className="flex-1 p-4 overflow-auto ">
        <Header />
        <WelcomeBox />
        <Cards/>
        <StatsCards />
        <div className="flex flex-col-2 gap-6">
          <TotalUsersChart />
          <ActiveStatusChart />
        </div>
       <MemberSummary />

      </main>
    </>
  );
}
