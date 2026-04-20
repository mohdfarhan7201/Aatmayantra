import React, { useState } from "react";
import Header from "./Header";
import Top from "./Top";
import SearchBar from "./SearchBar";
import AppointmentList from "./AppointmentList";
import CreateModal from "./CreateModal";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-white min-h-screen p-5 -mt-2">
      <Header/>
      <div className="bg-white rounded-xl p-5 shadow-md">
        <Top onOpen={() => setOpenModal(true)} />
        <SearchBar />
        <AppointmentList />
      </div>

      {openModal && <CreateModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}