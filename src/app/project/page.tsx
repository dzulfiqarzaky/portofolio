"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Spacer } from "@/shared/style";
import { projects } from "@/shared/constants";
import { IntroMotion, ProgressMotion } from "@/shared/components/motions/";
import { Title } from "@/shared/components";
import { TITLE } from "@/shared/constants/common";
import useSwipe from "@/shared/hooks/useSwipe";

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

const Projects = () => {
    const {
        handleMouseUp,
        handleTouchEnd,
        swipedIndex,
        handleTouchStart,
        handleTouchMove,
        handleMouseDown,
        handleMouseMove,
    } = useSwipe();

    const title = TITLE.PROJECTS.split("");

    return (
        <Box sx={{ pt: 4 }} onMouseUp={handleMouseUp} onTouchEnd={handleTouchEnd}>
            <Title title={title} />
            <div
                style={{
                    display: "flex",
                    gap: "2.5rem",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                {projects.map((project, index) => (
                    <IntroMotion start="right" end="bottom">
                        <MainContainer key={index}>
                            <CardWrapper
                                className={
                                    swipedIndex?.filter((swiped) => swiped?.index === index) &&
                                    swipedIndex?.filter((swiped) => swiped?.index === index)[0]?.swiped
                                        ? "swiped"
                                        : ""
                                }
                                onTouchStart={(event: React.TouchEvent<HTMLDivElement>) =>
                                    handleTouchStart(index, event)
                                }
                                onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => handleTouchMove(index, event)}
                                onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => handleMouseDown(index, event)}
                                onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => handleMouseMove(index, event)}
                                onMouseUp={handleMouseUp}
                                onTouchEnd={handleTouchEnd}
                            >
                                <CardContent>
                                    <CardTitle>{project.title}</CardTitle>
                                    <Spacer />
                                    {project.tech.map((tech, techIndex) => (
                                        <React.Fragment key={techIndex}>
                                            <Spacer />
                                            <Typography variant="h6" style={{ fontWeight: 500 }}>
                                                {tech.title}
                                            </Typography>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: ".2rem",
                                                    flexWrap: "wrap",
                                                    paddingBottom: "1rem",
                                                }}
                                            >
                                                {tech.description.split(",").map((tec) => (
                                                    <div
                                                        style={{
                                                            fontSize: "14px",
                                                            background: "hsla(220, 90%, 50%, 0.8)",
                                                            color: "white",
                                                            padding: "2px 8px",
                                                            borderRadius: "4px",
                                                        }}
                                                        key={tec}
                                                    >
                                                        {tec}
                                                    </div>
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                    <div style={{ paddingTop: "2rem" }}></div>
                                    <motion.div
                                        style={{
                                            position: "fixed",
                                            bottom: 0,
                                            right: 0,
                                            width: "100%",
                                            borderRadius: "0 0 10px 10px",
                                            fontWeight: 600,
                                            color: "white",
                                            background: "hsla(310, 100%, 56%, 0.8)",
                                            padding: ".5rem 1rem",
                                            textAlign: "center",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <motion.p
                                            initial={{ x: 50, opacity: 1 }}
                                            animate={{ x: 70, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            {"  >>>  "}
                                        </motion.p>
                                        {"SWIPE"}
                                        <motion.p
                                            initial={{ x: -50, opacity: 1 }}
                                            animate={{ x: -70, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            {"  <<<  "}
                                        </motion.p>
                                    </motion.div>
                                </CardContent>
                                <BackCardContent>
                                    <CardTitle>{project.title}</CardTitle>
                                    <Spacer />
                                    <p>{project.description}</p>
                                    <Spacer />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        {project.link.map((link, linkIndex) => (
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={linkIndex}
                                            >
                                                <ProgressMotion>
                                                    <div
                                                        style={{
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {link.title}
                                                    </div>
                                                </ProgressMotion>
                                            </a>
                                        ))}
                                    </div>
                                </BackCardContent>
                            </CardWrapper>
                        </MainContainer>
                    </IntroMotion>
                ))}
            </div>
        </Box>
    );
};

const MainContainer = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background: none;
    /* pointer-events: none;  */

    @media screen and (max-width: 768px) {
        width: 270px;
        height: 400px;
    }

    @media screen and (max-width: 1200px) {
    }
`;

const CardWrapper = styled.div`
    background: white;
    user-select: none;
    background: none;
    /* position: relative; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    background: #ffc728;
    touch-action: pan-x; /* Add this line */
    pointer-events: auto;
    /* touch-action: pan-x; */
    border: 3px solid rgb(203 213 225);
    border-radius: 10px;
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
    overflow: auto;
    background: white;
    border-radius: 10px;
    color: #434343;
    scrollbar-width: none;
`;

const CardTitle = styled.h1`
    font-size: 22px;
`;

const BackCardContent = styled(CardContent)`
    position: absolute;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: white;
    text-align: center;
    color: #434343;
    transform: rotateY(180deg);
    scrollbar-width: none;
`;

export default Projects;
