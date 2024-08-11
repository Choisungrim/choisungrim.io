import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Profile from './profile';
import ResumeCareer from './resumeCareer';
import ResumeSkill from './resumeSkill';
import Loading from './loading';
import './App.css';

const pageVariants = {
    initial: {
        scale: 0.2, // 시작할 때 크기
        opacity: 0,
    },
    in: {
        scale: 1, // 최종 크기
        opacity: 1,
    },
    out: {
        scale: 0.2, // 종료할 때 크기
        opacity: 0,
    },
};

function App() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.key}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <Profile />
                        </motion.div>
                    }
                />
                <Route
                    path="/resumeCareer"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <ResumeCareer />
                        </motion.div>
                    }
                />
                <Route
                    path="/resumeSkill"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <ResumeSkill />
                        </motion.div>
                    }
                />
                <Route
                    path="/loading/:nextPage"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <Loading />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
