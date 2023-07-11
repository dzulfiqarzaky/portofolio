"use client";
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import useScrollSnap from "react-use-scroll-snap";
import Main from '../components/Main';
import Education from '../components/Education';
import Experiences from '../components/Experiences';
import Technology from '../components/Technology';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import {
  main,
  education,
  experiences,
  technologies,
  projects,
  contacts,
} from '../constants/index.js';
// import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import './hovertree.js'

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
  height: ${props => props?.notFull ? "auto": "100vh"};
  display: flex;
  align-items: center;
`;

export default function Home() {
  return (
    <MainContainer>
      <canvas id="canvas"></canvas>
      {[
        { component: <Main main={main} contacts={contacts} /> },
        { component: <Education education={education} /> },
        { component: <Experiences experiences={experiences} /> },
        { component: <Technology technologies={technologies} />, notFull: true },
        { component: <Projects projects={projects} />, notFull: true },
      ].map((section, index) => (
        <SectionWrapper key={index} notFull={section.notFull} 
        // onMouseEnter={textEnter} 
        // onMouseLeave={textLeave}
        >
          <MainWrapper >
            {section.component}
          </MainWrapper>
        </SectionWrapper>
      ))}
    </MainContainer>
  );
}
