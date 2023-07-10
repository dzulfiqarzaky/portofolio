import React, { useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import {Spacer} from './style';

interface TechnologyInterface {
  title: string;
  description: string;
}

interface LinkInterface {
  title: string;
  url: string;
}

interface ProjectInterface {
  title: string;
  description: string;
  feat: string;
  tech: TechnologyInterface[];
  link: LinkInterface[];
}

const MainContainer = styled.div`
  position: relative;
  width: 340px;
  height: 400px;
  background: none;
`
const CardWrapper = styled.div`
    background: yellow;
  color: black;
  background: none;
  /* position: relative; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.5s ease; /* Updated transition duration */
  background: #ffc728;
  color: #000;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #ffc728;
  color: #000;
`;

const CardTitle = styled.h1`
  font-size: 24px;
`;

const BackCardContent = styled(CardContent)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  background: #ffc728;
  color: #000;
  transform: rotateY(180deg);
`;

const Projects = ({ projects }: { projects: ProjectInterface[] }) => {


  return (
    <Box sx={{ pt: 4 }}>
      <Typography variant="h2">Projects</Typography>
      <Spacer />
      <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>

        {projects.map((project, index) => (
            <MainContainer 
            key={index}
            >
                <CardWrapper
                >
                    <CardContent>
                        <CardTitle>{project.title}</CardTitle>
                            {project.tech.map((tech, techIndex) => (
                                <React.Fragment key={techIndex}>
                                <Spacer />
                                <Typography variant="h6">{tech.title}</Typography>
                                <p>{tech.description}</p>
                                </React.Fragment>
                            ))}
                        
                    </CardContent>
                    <BackCardContent>
                    <CardTitle>{project.title}</CardTitle>
                        <Spacer />
                        <p>{project.description}</p>
                        <Spacer />
                        <div style={{
                            display: 'flex',
                            flexDirection: "column"
                        }}>
                        {project.link.map((link, linkIndex) => (
                            <a href={link.url} target="_blank" rel="noopener noreferrer" key={linkIndex}>
                            {link.title}
                            </a>
                        ))}
                        </div>

                    </BackCardContent>
                </CardWrapper>

            </MainContainer>
        ))}
      </div>
    </Box>
  );
};

export default Projects;
