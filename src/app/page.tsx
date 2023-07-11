"use client";
import { useEffect } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
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
import Hovertree from './hovertree';

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
  height: ${props => (props?.notFull ? 'auto' : '100vh')};
  display: flex;
  align-items: center;
`;

const Home = () => {


  return (
    <MainContainer>
      <Hovertree />
      <MainContainer>
        {[
          { component: <Main main={main} contacts={contacts} /> },
          { component: <Education education={education} /> },
          { component: <Experiences experiences={experiences} /> },
          { component: <Technology technologies={technologies} />, notFull: true },
          { component: <Projects projects={projects} />, notFull: true },
        ].map((section, index) => (
          <SectionWrapper key={index} notFull={section.notFull}>
            <MainWrapper>{section.component}</MainWrapper>
          </SectionWrapper>
        ))}
      </MainContainer>
    </MainContainer>
  );
};

export default Home;
