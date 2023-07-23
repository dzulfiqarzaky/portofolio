"use client";
import { useEffect } from "react";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Main from "../components/Main";
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Technology from "../components/Technology";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import {
    main,
    education,
    experiences,
    technologies,
    projects,
    contacts,
} from "../constants/index.js";
import Hovertree from "./hovertree";

interface SectionWrapperProps {
    notFull?: boolean;
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const MainWrapper = styled.div`
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

const Home = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainContainer>
            <Hovertree />
            <MainContainer>
                {[
                    {
                        component: <Main main={main} contacts={contacts} />,
                        notFull: false,
                    },
                    {
                        component: <Education education={education} />,
                        notFull: false,
                    },
                    {
                        component: <Experiences experiences={experiences} />,
                        notFull: false,
                    },
                    {
                        component: <Technology technologies={technologies} />,
                        notFull: true,
                    },
                    {
                        component: <Projects projects={projects} />,
                        notFull: true,
                    },
                ].map((section, index) => (
                    <AnimatePresence key={index} initial={false}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.5 }}
                        >
                            <SectionWrapper notFull={section?.notFull}>
                                <MainWrapper>{section.component}</MainWrapper>
                            </SectionWrapper>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </MainContainer>
        </MainContainer>
    );
};

export default Home;
