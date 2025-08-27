import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "./profile";
import ResumeCareer from "./resumeCareer";
import ResumeSkill from "./resumeSkill";
import resumePortfolio from "./component/ResumePortfolio";
import Ready from "./ready";
import Loading from "./loading";
import Memo from "./memo";
import UML from "./uml";
// import NotFound from './NotFound'; // 404 페이지
import "./App.css";

const pageVariants = {
  initial: {
    scale: 0.2,
    opacity: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
  },
  out: {
    scale: 0.2,
    opacity: 0,
  },
};

const AnimatedRoute = ({ component: Component }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
  >
    <Component />
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<AnimatedRoute component={Profile} />} />
        <Route
          path="/resumeCareer"
          element={<AnimatedRoute component={ResumeCareer} />}
        />
        <Route
          path="/resumeSkill"
          element={<AnimatedRoute component={ResumeSkill} />}
        />
        <Route
          path="/resumePortfolio"
          element={<AnimatedRoute component={resumePortfolio} />}
        />
        <Route path="/ready" element={<AnimatedRoute component={Ready} />} />
        <Route
          path="/loading/:nextPage"
          element={<AnimatedRoute component={Loading} />}
        />
        <Route path="/memo" element={<AnimatedRoute component={Memo} />} />
        <Route path="/uml" element={<AnimatedRoute component={UML} />} />
        {/* <Route path="*" element={<AnimatedRoute component={NotFound} />} /> 404 페이지 */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
