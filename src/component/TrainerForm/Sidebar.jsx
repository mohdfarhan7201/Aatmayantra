import React from "react";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

/* STEP VECTOR IMAGES */
import Step1Img from "../../assets/step1.svg";
import Step2Img from "../../assets/step2.svg";
import Step3Img from "../../assets/step3.svg";
import Step4Img from "../../assets/step4.svg";
import Stepsbg from "../../assets/stepsbg.svg";

/* Icons */
import { FaUser, FaFileAlt, FaUniversity, FaCheck } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

export default function Sidebar({ currentStep, completedSteps, onStepChange }) {

  const steps = [
    { id: 1, label: "Personal Details", icon: <FaUser className="text-white text-xs" /> },
    { id: 2, label: "Certification", icon: <GrCertificate className="text-white text-mb" /> },
    { id: 3, label: "Documentation", icon: <FaFileAlt className="text-white text-xs" /> },
    { id: 4, label: "Bank Details", icon: <FaUniversity className="text-white text-xs" /> },
  ];

  const stepImages = {
    1: Step1Img,
    2: Step2Img,
    3: Step3Img,
    4: Step4Img,
  };

  const canClickStep = (stepId) => completedSteps.includes(stepId);

  const handleStepClick = (stepId) => {
    if (canClickStep(stepId)) onStepChange(stepId);
  };

  return (
    <div className="w-[260px] min-h-screen bg-[#F7FBFA] border-r border-gray-300 p-6 z-50 fixed overflow-visible">

      <img
        src={Stepsbg}
        alt="Background"
        className="w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-28"
      />

      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img src={logo} alt="logo" className="w-[60px]" />
        <div className="text-2xl mt-3 ml-2">AATMAYANTRA</div>
      </div>

      {/* Steps */}
      <div className="relative pl-5">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = completedSteps.includes(step.id);

          const nextStep = steps[index + 1];
          const nextCompleted = nextStep && completedSteps.includes(nextStep.id);
          const nextActive = nextStep && currentStep === nextStep.id;

          const lineColor = nextActive || nextCompleted ? "bg-[#0E7F70]" : "bg-gray-300";

          return (
            <motion.div
              key={step.id + "-step-" + currentStep}   // 🔥 FORCE re-animation on step change
              className="relative flex items-start mb-10 cursor-pointer"
              onClick={() => handleStepClick(step.id)}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Circle */}
              <div
                className={`
                  w-[32px] h-[32px] rounded-full flex items-center justify-center z-10
                  ${isActive || isCompleted
                    ? "bg-[#0E7F70] ring-2 ring-[#0E7F70] ring-offset-2 ring-offset-white"
                    : "bg-gray-300"}
                `}
              >
                {isCompleted ? (
                  <FaCheck className="text-white text-xs" />
                ) : (
                  isActive && step.icon
                )}
              </div>

              {/* Label */}
              <span
                className={`
                  ml-3 text-[20px]
                  ${isActive || isCompleted ? "text-[#0E7F70] font-semibold" : "text-gray-600"}
                `}
              >
                {step.label}
              </span>

              {/* Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-[15px] top-[32px] w-[4px] h-10 ${lineColor}`}
                ></div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Step Illustration */}
      <div className="flex justify-center mt-[15px] relative overflow-visible">
        <motion.img
          key={"img-" + currentStep}                    // 🔥 re-trigger animation on each step
          src={stepImages[currentStep]}
          alt="Step Illustration"
          className="w-[200px] opacity-100 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [100, 10, 0], scale: [0, 1.15, 1] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

    </div>
  );
}
