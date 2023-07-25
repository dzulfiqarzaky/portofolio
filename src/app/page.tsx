"use client";
import React, { LegacyRef, useEffect, useState } from "react";
import { styled } from "styled-components";
import Hovertree from "./hovertree";
import Main from "./main/page";
import Education from "./education/page";
import Experiences from "./experience/page";
import Technology from "./technology/page";
import Projects from "./project/page";
import AnimatedComponent from "@/components/HelloIntro";

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
    const useIntersectionObserver = (
        index: number
    ): LegacyRef<HTMLDivElement> | undefined => {
        return undefined;
    };
    return (
        <MainContainer>
            <Hovertree />
            <MainContainer>
                {sections.map((section, index) => (
                    <AnimatedComponent duration={0} threshold={0}>
                        <SectionWrapper
                            ref={useIntersectionObserver(index)}
                            notFull={section.notFull}
                        >
                            <MainWrapper>{section.component}</MainWrapper>
                        </SectionWrapper>
                    </AnimatedComponent>
                ))}
            </MainContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const MainWrapper = styled.div`
    padding: 1rem;
    max-width: 1180px;
    margin: 0 auto;
`;

const SectionWrapper = styled.div<SectionWrapperProps>`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;
export default Home;
