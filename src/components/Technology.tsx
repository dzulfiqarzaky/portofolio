import React from 'react'
import styled from 'styled-components';
import { Spacer } from './style'
import { ReactSVG } from "react-svg";
import Hello from './HelloMotion'

export interface TechnologiesInterface {
    title: string;
    data: {title: string; url: string;}[];
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

const Technology = ({technologies}: {technologies: TechnologiesInterface[]}) => {
  const title= "Technology".split("")
  return (
    <div>
        <Title>
        {title.map((letter, index) => (
          <Hello key={index}>
          {letter}
          </Hello>
        ))}
        </Title>
        <Spacer />
        {/* {technologies.map(tech => (
          <div key={tech.title}>
                <Spacer/>
                <TechnologyTitle>{tech.title}</TechnologyTitle>
                <TechnologyDescription>{tech.description}</TechnologyDescription>
          </div>
        ))} */}
        {technologies.map(tech => (
          <div key={tech.title}>
          <Spacer/>
          <TechnologyTitle>{tech.title}</TechnologyTitle>
          <Spacer/>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            {tech.data.map(tch => (
              <Hello>
                <div style={{
                  background: 'yellow',
                  padding: '.5rem',
                  border: '3px solid black'
                }}>
                  <ReactSVG src={tch.url} beforeInjection={(svg) => {
                    svg.classList.add('svg-class-name')
                    svg.setAttribute('style', 'width: 56px; height: 56px;')
                  }} />
                </div>
              </Hello>
            ))}
          </div>
          </div>
          )
        )}
    </div>
  )
}

export default Technology