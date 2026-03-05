
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



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/HOME/Home';
import About from './component/ABOUT/About';
import Service from './component/SERVICE/Service';
import Contact from './component/CONTACT/Contact';
import Carrier from "./component/CARRIER/Carrier2";
import Login from "./component/LOGIN/Login";
import TrainerForm from "./component/TrainerForm/TrainerForm";
import TrainerApp from "./component/TrainerDashboard/TrainerApp";

// manager dashboard
import ManagerDashboard from "./component/ManagerDashboard/manager";

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainer-form" element={<TrainerForm />} />
        <Route path="/trainer/*" element={<TrainerApp />} />

        {/* Manager Dashboard */}
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />

      </Routes>
    </Router>
  );
};

export default App;