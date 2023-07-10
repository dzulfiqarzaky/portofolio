import React from 'react'
import {Spacer} from './style'
import styled from 'styled-components';
import { Typography, Link } from '@mui/material';
import { css } from 'styled-components';
import LinkMotion from './LinkMotion';
import Hello from './HelloMotion'

export interface ExperienceInterface {
    title: string;
    link: string;
    description: string;
}

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 4rem;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;

  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)<{ glow?: boolean }>`
    text-decoration: none;
    font-weight: bold;
    color: black;
    @media (prefers-color-scheme: dark) {
      color: white
    }

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
    }

    ${props =>
      props?.glow &&
      css`
        &:hover {
          background-color: #ff5100;
          color: #ff5100; /* Replace with your desired glow color */
          @media (prefers-color-scheme: dark) {
            color: #ff6200;
            background-color: #ff5100;

          }
        }
      `}
  `;

const Experiences = ({experiences}: {experiences: ExperienceInterface[]}) => {
  const title = "Experience".split("")
  return (
    <div>
        <Title>
        {title.map((letter, index) => (
          <Hello key={index}>
          {letter}
          </Hello>
        ))}
        </Title>
        <Spacer/>
        {experiences.map((exp, index) => (
            <div key={index}>
                <Spacer/>
                <LinkMotion>
                  <StyledLink href={exp.link} target="_blank" rel="noopener noreferrer" glow>
                    <ExperienceTitle>{exp.title}</ExperienceTitle>
                  </StyledLink>
                </LinkMotion>
                <ExperienceDescription>{exp.description}</ExperienceDescription>
            </div>
        ))}
    </div>
  )
}

export default Experiences