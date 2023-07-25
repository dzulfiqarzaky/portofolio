"use client";
import React from "react";
import { styled } from "styled-components";
import Hovertree, { colorHoverTree } from "./hovertree";
import Main from "./main/page";
import Education from "./education/page";
import Experiences from "./experience/page";
import Technology from "./technology/page";
import Projects from "./project/page";
import { motion } from "framer-motion";

interface SectionWrapperProps {
    notFull?: boolean;
}

const sections = [
    {
        component: <Main />,
        notFull: false,
        path: "/",
    },
    {
        component: <Education />,
        notFull: false,
        path: "/education",
    },
    {
        component: <Experiences />,
        notFull: false,
        path: "/experiences",
    },
    {
        component: <Technology />,
        notFull: true,
        path: "/technology",
    },
    {
        component: <Projects />,
        notFull: true,
        path: "/projects",
    },
    // Add other sections here
];

const Home = () => {
    return (
        <PageContainer>
            <Hovertree />
            <MainContainer>
                {sections.map((section, index) => (
                    <>
                        <SectionWrapper notFull={section.notFull}>
                            <MainWrapper
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                notFull={section.notFull}
                            >
                                {section.component}
                            </MainWrapper>
                        </SectionWrapper>
                    </>
                ))}
            </MainContainer>
        </PageContainer>
    );
};

const PageContainer = styled.div``;

const MainContainer = styled(motion.div)``;

const MainWrapper = styled(motion.div)<SectionWrapperProps>`
    padding: 5rem;
    border-radius: 10px;
    max-width: 1180px;
    margin: 0 auto;
    background: hsla(220, 90%, 50%, 0.2);
    box-shadow: -16px 18px 10px hsla(310, 100%, 56%, 0.5);
    margin-top: ${(p) => (p.notFull ? "10rem" : 0)};

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }

    @media screen and (max-width: 1200px) {
        padding: 3rem;
    }
`;

const SectionWrapper = styled.div<SectionWrapperProps>`
    width: 100vw;
    height: ${(p) => (p.notFull ? "auto" : "100vh")};
    background: hsla(200, 90%, 50%, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export default Home;
