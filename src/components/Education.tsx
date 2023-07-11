import React from 'react';
import styled from 'styled-components';
import { Spacer } from './style';
import { Typography, Link } from '@mui/material';
import { css } from 'styled-components';
import Hello from './HelloMotion'
import LinkMotion from './LinkMotion';

export interface EducationInterface {
  title: string;
  link: string;
  subHead: string;
  description: string;
}

const EducationContainer = styled.div`
`;

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

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;

  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const EducationDescription = styled.p`
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
    /* color: black; */
    color: white;
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
          color: #ff5100; /* Replace with your desired glow color */
          @media (prefers-color-scheme: dark) {
            color: #ff6200;
          }
        }
      `}
  `;


const Education = ({ education }: {education: EducationInterface[]}) => {
  const title= "Education".split("")
  return (
    <EducationContainer>
      <Title>
        {title.map((letter, index) => (
          <Hello key={index}>
            {letter}
          </Hello>
        ))}
        </Title>
      <Spacer />
      {education.map((edu) => (
        <React.Fragment key={edu.title}>
          <Spacer />
          <StyledLink href={edu.link} target="_blank" rel="noopener noreferrer" glow>
          <LinkMotion>
            <EducationTitle>{edu.title}</EducationTitle>
          </LinkMotion>
          </StyledLink>
            <EducationDescription>{edu.description}</EducationDescription>
        </React.Fragment>
      ))}
    </EducationContainer>
  );
};

export default Education;
