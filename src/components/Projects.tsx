import React, { useState, useRef, useEffect } from 'react';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { Spacer } from './style';

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
`;

const CardWrapper = styled.div`
  background: yellow;
  user-select: none;
  color: black;
  background: none;
  /* position: relative; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
  background: #ffc728;
  color: #000;

  &.swiped {
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
  const [swipedIndex, setSwipedIndex] = useState<{index: number; swiped: boolean}[]>([]);
  const [swiped, setSwiped] = useState(true)
  const [choosenIndex, setChoosenIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null);
  const touchMoveX = useRef<number | null>(null);
  
  const swipeFn = (index: number) => {
    if (swipedIndex.length === 0) {
      setSwipedIndex([{ index, swiped: true }]);
    } else {
      setSwipedIndex((prev) => {
        const found = prev.findIndex((swiped) => swiped.index === index);
        console.log(found);
        if (found !== -1) {
          const updatedSwipedIndex = [...prev];
          updatedSwipedIndex[found].swiped = !updatedSwipedIndex[found].swiped;
          return updatedSwipedIndex;
        } else {
          return [...prev, { index, swiped: true }];
        }
      });
    }
  };
  
  
  const handleTouchStart = (index: number, event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    // if (deltaX > 10) {
    //   swipeFn(index)
    //   } else if (deltaX < -10) {
    //     swipeFn(index)
    //   }
  };

  const handleTouchMove = (index: number, event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX.current) return;
    touchMoveX.current = event.touches[0].clientX;
    // if (deltaX > 10) {
    //     swipeFn(index)
    //   } else if (deltaX < -10) {
    //     swipeFn(index)
    //   }
  };

  const handleMouseDown = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    touchStartX.current = event.clientX;
    setChoosenIndex(index)
  };

  const handleMouseMove = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (!touchStartX.current) return;
    touchMoveX.current = event.clientX;
  };

  const handleMouseUp = () => {
    if (!touchStartX.current || !touchMoveX.current) {
      touchStartX.current = null;
      touchMoveX.current = null;
      return;
    }

    const deltaX = touchMoveX.current - touchStartX.current;
    if(choosenIndex && (deltaX > 10 || deltaX < -10)) {
        swipeFn(choosenIndex)
    }

    touchStartX.current = null;
    touchMoveX.current = null;
  };

  const handleTouchEnd = () => {
    handleMouseUp()
  };


  return (
    <Box sx={{ pt: 4 }} 
    onMouseUp={handleMouseUp}
    onTouchEnd={handleTouchEnd}
    >
      <Typography variant="h2">Projects</Typography>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {projects.map((project, index) => (
          <MainContainer key={index}
          {...handlers}
          >
            <CardWrapper
              className={swipedIndex?.filter(swiped => swiped?.index === index) && swipedIndex?.filter(swiped => swiped?.index === index)[0]?.swiped ? 'swiped' : ''}
              onTouchStart={(event: React.TouchEvent<HTMLDivElement>) => handleTouchStart(index, event)}
              onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => handleTouchMove(index, event)}
              onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => handleMouseDown(index, event)}
              onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => handleMouseMove(index, event)}
              onMouseUp={handleMouseUp}
              onTouchEnd={handleTouchEnd}
            >
              <CardContent style={{ overflow: 'auto' }}>
                <CardTitle>{project.title}</CardTitle>
                {project.tech.map((tech, techIndex) => (
                  <React.Fragment key={techIndex}>
                    <Spacer />
                    <Typography variant="h6">{tech.title}</Typography>
                    <div
                      style={{
                        display: 'flex',
                        gap: '.2rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      {tech.description.split(',').map((tec) => (
                        <div
                          style={{
                            background: 'black',
                            color: 'yellow',
                            padding: '4px 8px',
                            borderRadius: '10px',
                          }}
                          key={tec}
                        >
                            {tec}
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </CardContent>
              <BackCardContent>
                <CardTitle>{project.title}</CardTitle>
                <Spacer />
                <p>{project.description}</p>
                <Spacer />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
