// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import Sidebar from "./Sidebar";
// import PersonalDetails from "./PersonalDetails";
// import Certification from "./Certificate";
// import Documentation from "./Documents";
// import BankDetails from "./BankDetails";

// export default function TrainerForm() {
//   const [step, setStep] = useState(1);

//   // Track completed steps
//   const [completedSteps, setCompletedSteps] = useState([1]);

//   const markStepComplete = (nextStep) => {
//     setCompletedSteps((prev) =>
//       prev.includes(nextStep) ? prev : [...prev, nextStep]
//     );
//   };

//   // ✨ Animation for every step change
//   const pageAnimation = {
//     initial: { opacity: 0, x: 50 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -50 },
//     transition: { duration: 1, ease: "easeIn" },
//   };

//   const renderPage = () => {
//     switch (step) {
//       case 1:
//         return (
//           <motion.div key={step} {...pageAnimation}>
//             <PersonalDetails
//               next={() => {
//                 markStepComplete(2);
//                 setStep(2);
//               }}
//             />
//           </motion.div>
//         );

//       case 2:
//         return (
//           <motion.div key={step} {...pageAnimation}>
//             <Certification
//               next={() => {
//                 markStepComplete(3);
//                 setStep(3);
//               }}
//               prev={() => setStep(1)}
//             />
//           </motion.div>
//         );

//       case 3:
//         return (
//           <motion.div key={step} {...pageAnimation}>
//             <Documentation
//               next={() => {
//                 markStepComplete(4);
//                 setStep(4);
//               }}
//               prev={() => setStep(2)}
//             />
//           </motion.div>
//         );

//       case 4:
//         return (
//           <motion.div key={step} {...pageAnimation}>
//             <BankDetails prev={() => setStep(3)} />
//           </motion.div>
//         );

//       default:
//         return (
//           <motion.div key={step} {...pageAnimation}>
//             <PersonalDetails
//               next={() => {
//                 markStepComplete(2);
//                 setStep(2);
//               }}
//             />
//           </motion.div>
//         );
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar
//         currentStep={step}
//         completedSteps={completedSteps}
//         onStepChange={(s) => setStep(s)}
//       />

//       <div className="flex-1 p-10 ml-65">{renderPage()}</div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import PersonalDetails from "./PersonalDetails";
import Certification from "./Certificate";
import Documentation from "./Documents";
import BankDetails from "./BankDetails";

export default function TrainerForm() {
  const [step, setStep] = useState(1);

  // ⭐ CENTRAL STORE: Personal data (including contact_number)
  const [personalData, setPersonalData] = useState({
    full_name: "",
    date_of_birth: "",
    gender: "",
    contact_number: "",
    email: "",
    state: "",
    city: "",
    pincode: "",
    spoken_language: "",
    profileImage: null,
  });

  // ⭐ Other step data
  const [certificateData, setCertificateData] = useState({});
  const [documentData, setDocumentData] = useState({});
  const [bankData, setBankData] = useState({});

  const [completedSteps, setCompletedSteps] = useState([1]);

  const markStepComplete = (nextStep) => {
    setCompletedSteps((prev) =>
      prev.includes(nextStep) ? prev : [...prev, nextStep]
    );
  };

  const pageAnimation = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  const renderPage = () => {
    switch (step) {
      case 1:
        return (
          <motion.div key={step} {...pageAnimation}>
            <PersonalDetails
              data={personalData}
              setData={setPersonalData}
              next={() => {
                markStepComplete(2);
                setStep(2);
              }}
            />
          </motion.div>
        );

      case 2:
        return (
          <motion.div key={step} {...pageAnimation}>
            <Certification
              data={certificateData}
              setData={setCertificateData}
              personalData={personalData} // ⭐ contact_number + full name used here
              next={() => {
                markStepComplete(3);
                setStep(3);
              }}
              prev={() => setStep(1)}
            />
          </motion.div>
        );

      case 3:
        return (
          <motion.div key={step} {...pageAnimation}>
            <Documentation
              trainerData={documentData}
              setTrainerData={setDocumentData}
              personalData={personalData}   // ⭐ IMPORTANT: used to attach trainer.contact_number
              certificateData={certificateData}
              next={() => {
                markStepComplete(4);
                setStep(4);
              }}
              prev={() => setStep(2)}
            />
          </motion.div>
        );

      case 4:
        return (
          <motion.div key={step} {...pageAnimation}>
            <BankDetails
              data={bankData}
              setData={setBankData}
              personalData={personalData}
              certificateData={certificateData}
              documentData={documentData}
              prev={() => setStep(3)}
            />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        currentStep={step}
        completedSteps={completedSteps}
        onStepChange={(s) => setStep(s)}
      />

      <div className="flex-1 p-10 ml-65">{renderPage()}</div>
    </div>
  );
}
