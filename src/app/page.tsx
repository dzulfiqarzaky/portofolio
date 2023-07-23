"use client";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Hovertree from "./hovertree";
import {
    main,
    education,
    experiences,
    technologies,
    projects,
    contacts,
} from "../constants/index.js";
import Main from "./main/page";
import Education from "./education/page";
import Experiences from "./experience/page";
import Technology from "./technology/page";
import Projects from "./project/page";

interface SectionWrapperProps {
    notFull?: boolean;
}

const Home = () => {
    const sections = [
        {
            component: <Main main={main} contacts={contacts} />,
            notFull: false,
            path: "/",
        },
        {
            component: <Education education={education} />,
            notFull: false,
            path: "/education",
        },
        {
            component: <Experiences experiences={experiences} />,
            notFull: false,
            path: "/experiences",
        },
        {
            component: <Technology technologies={technologies} />,
            notFull: true,
            path: "/technology",
        },
        {
            component: <Projects projects={projects} />,
            notFull: true,
            path: "/projects",
        },
        // Add other sections here
    ];

    return (
        <MainContainer>
            <Hovertree />
            <MainContainer>
                <AnimatePresence mode="wait">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.path}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.5 }}
                        >
                            <SectionWrapper notFull={section.notFull}>
                                <MainWrapper>{section.component}</MainWrapper>
                            </SectionWrapper>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </MainContainer>
        </MainContainer>
    );
};

const MainContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
`;

const MainWrapper = styled(motion.div)`
    padding: 1rem;
    max-width: 1180px;
    margin: 0 auto;
`;

const SectionWrapper = styled.div<SectionWrapperProps>`
    width: 100vw;
    height: ${(props) => (props?.notFull ? "auto" : "100vh")};
    display: flex;
    align-items: center;
`;

export default Home;
