import React from 'react'
import styled from 'styled-components';
import { Spacer } from './style'

export interface TechnologiesInterface {
    title: string;
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

const TechnologyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;

  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const TechnologyDescription = styled.p`
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

const Technology = ({technologies}: TechnologiesInterface) => {
  return (
    <div>
        <Title>Technology</Title>
        <Spacer />
        {technologies.map(tech => (
          <div key={tech.title}>
                <Spacer/>
                <TechnologyTitle>{tech.title}</TechnologyTitle>
                <TechnologyDescription>{tech.description}</TechnologyDescription>
          </div>
        ))}
    </div>
  )
}

export default Technology