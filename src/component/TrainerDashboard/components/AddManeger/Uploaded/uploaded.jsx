import React, { useState } from "react";
import { FaThLarge, FaTable } from "react-icons/fa";
import UploadedGrid from "./UploadedGrid";
import UploadedTable from "./UploadedTable";
import { IoMdGrid } from "react-icons/io";
import { FaTableList } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import Tabs from "../Upcoming/Tabs";

export default function Uploaded() {
  const [view, setView] = useState("grid");

  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-white shadow">
      <button
      onClick={() => setView("grid")}
      className={`px-4 py-2 flex gap-1 rounded border ${view === "grid" ? "bg-black text-white" : "bg-gray-200"}`}
      >
        <span className="mt-1">
          <IoMdGrid />
          </span> 
      Grid Cards
      </button>
      
      
      <button
      onClick={() => setView("table")}
      className={`px-4 py-2 flex gap-1 rounded border ${view === "table" ? "bg-black text-white" : "bg-gray-200"}`}
      >
          <span className="mt-1">
          <FaTableList />
          </span> 
      Table
      </button>
      
      
      <div className="ml-auto px-3 flex items-center gap-2 lg:w-180 border rounded-lg">
        <GoSearch className="text-gray-500" />
      
        <input
          type="text"
          placeholder="Search by session title"
          className="flex-1 px-3 py-2 "
        />
      </div>
      
      
      
      </div>
      <Tabs/>

      {view === "grid" ? <UploadedGrid /> : <UploadedTable />}

    </>
  );
}
