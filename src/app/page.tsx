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
import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';

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
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [cursorVariant, setCursorVariant] = useState('default');

  // const updateMousePosition = 
  //   (e: MouseEvent) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   }

  // useEffect(() => {
  //   const onMouseMove = (e: MouseEvent) => {
  //     requestAnimationFrame(() => {
  //       updateMousePosition(e);
  //     });
  //   };

  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, []);

  // const variant: any = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: 'rgb(244, 244, 244)',
  //     mixBlendMode: 'difference',
  //   },
  // }

  // const textEnter = () => setCursorVariant('text');
  // const textLeave = () => setCursorVariant('default');

  return (
    <MainContainer>
      <motion.div className="cursor" 
      // variants={variant} 
      // animate={cursorVariant} 
      />
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
