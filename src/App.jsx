
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import Home from './component/HOME/Home';
// import About from './component/ABOUT/About';
// import Service from './component/SERVICE/Service';
// import Contact from './component/CONTACT/Contact';
// import Carrier from "./component/CARRIER/Carrier2";
// import Login from "./component/LOGIN/Login";
// import TrainerForm from "./component/TrainerForm/TrainerForm";
// import TrainerApp from "./component/TrainerDashboard/TrainerApp";

// // manager dashboard
// import ManagerDashboard from "./component/ManagerDashboard//manager";


// const App = () => {
//   return (
//     <Router>
//       <Navbar /> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/carrier" element={<Carrier />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/trainer-form" element={<TrainerForm />} />
//         <Route path="/trainer/*" element={<TrainerApp />} />

// {/*********** manager dashboard ******************/}

// <Route path='/manager-dashboard' element={ManagerDashboard} />


//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import Home from './component/HOME/Home';
// import About from './component/ABOUT/About';
// import Service from './component/SERVICE/Service';
// import Contact from './component/CONTACT/Contact';
// import Carrier from "./component/CARRIER/Carrier2";
// import Login from "./component/LOGIN/Login";
// import TrainerForm from "./component/TrainerForm/TrainerForm";
// import TrainerApp from "./component/TrainerDashboard/TrainerApp";

// // manager dashboard
// import ManagerDashboard from "./component/ManagerDashboard/manager";

// const App = () => {
//   return (
//     <Router>
//       <Navbar /> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/carrier" element={<Carrier />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/trainer-form" element={<TrainerForm />} />
//         <Route path="/trainer/*" element={<TrainerApp />} />

//         {/* Manager Dashboard */}
//         <Route path="/manager-dashboard" element={<ManagerDashboard />} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/HOME/Home";
import About from "./component/ABOUT/About";
import Service from "./component/SERVICE/Service";
import Contact from "./component/CONTACT/Contact";
import Carrier from "./component/CARRIER/Carrier2";
import Login from "./component/LOGIN/Login";
import TrainerForm from "./component/TrainerForm/TrainerForm";
import TrainerApp from "./component/TrainerDashboard/TrainerApp";

// manager dashboard
import ManagerDashboard from "./component/ManagerDashboard/ManagerApp";

function AppContent() {
  const location = useLocation();

  // ❌ Navbar hide for dashboard routes
  const hideNavbar =
    location.pathname.startsWith("/trainer") ||
    location.pathname.startsWith("/manager");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainer-form" element={<TrainerForm />} />

        {/* ✅ Trainer Dashboard */}
        <Route path="/trainer/*" element={<TrainerApp />} />

        {/* ✅ Manager Dashboard */}
        <Route path="/manager/*" element={<ManagerDashboard />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;