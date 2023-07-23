"use client";
import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Spacer, Title } from "../../components/style";
import Hello from "../../components/HelloMotion";
import LinkMotion from "../../components/LinkMotion";
import { motion } from "framer-motion";
import { projects } from "../../constants";

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
    const [swipedIndex, setSwipedIndex] = useState<
        { index: number; swiped: boolean }[]
    >([]);
    const [choosenIndex, setChoosenIndex] = useState<number | null>(null);
    const touchStartX = useRef<number | null>(null);
    const touchMoveX = useRef<number | null>(null);

    const swipeFn = (index: number) => {
        if (swipedIndex.length === 0) {
            setSwipedIndex([{ index, swiped: true }]);
        } else {
            setSwipedIndex((prev) => {
                const found = prev.findIndex(
                    (swiped) => swiped.index === index
                );
                console.log(found);
                if (found !== -1) {
                    const updatedSwipedIndex = [...prev];
                    updatedSwipedIndex[found].swiped =
                        !updatedSwipedIndex[found].swiped;
                    return updatedSwipedIndex;
                } else {
                    return [...prev, { index, swiped: true }];
                }
            });
        }
    };

    const handleTouchStart = (
        index: number,
        event: React.TouchEvent<HTMLDivElement>
    ) => {
        touchStartX.current = event.touches[0].clientX;
        setChoosenIndex(index);
    };

    const handleTouchMove = (
        index: number,
        event: React.TouchEvent<HTMLDivElement>
    ) => {
        if (!touchStartX.current) return;
        touchMoveX.current = event.touches[0].clientX;
    };

    const handleMouseDown = (
        index: number,
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        touchStartX.current = event.clientX;
        console.log(index, 111);
        setChoosenIndex(index);
    };

    const handleMouseMove = (
        index: number,
        event: React.MouseEvent<HTMLDivElement>
    ) => {
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

        if (
            (choosenIndex || choosenIndex === 0) &&
            (deltaX > 50 || deltaX < -50)
        ) {
            console.log("masuk");
            swipeFn(choosenIndex);
        }

        touchStartX.current = null;
        touchMoveX.current = null;
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    const title = "Projects".split("");

    return (
        <Box
            sx={{ pt: 4 }}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleTouchEnd}
        >
            <Title>
                {title.map((letter, index) => (
                    <Hello key={index}>{letter}</Hello>
                ))}
            </Title>
            <Spacer />
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {projects.map((project, index) => (
                    <MainContainer key={index}>
                        <CardWrapper
                            className={
                                swipedIndex?.filter(
                                    (swiped) => swiped?.index === index
                                ) &&
                                swipedIndex?.filter(
                                    (swiped) => swiped?.index === index
                                )[0]?.swiped
                                    ? "swiped"
                                    : ""
                            }
                            onTouchStart={(
                                event: React.TouchEvent<HTMLDivElement>
                            ) => handleTouchStart(index, event)}
                            onTouchMove={(
                                event: React.TouchEvent<HTMLDivElement>
                            ) => handleTouchMove(index, event)}
                            onMouseDown={(
                                event: React.MouseEvent<HTMLDivElement>
                            ) => handleMouseDown(index, event)}
                            onMouseMove={(
                                event: React.MouseEvent<HTMLDivElement>
                            ) => handleMouseMove(index, event)}
                            onMouseUp={handleMouseUp}
                            onTouchEnd={handleTouchEnd}
                        >
                            <CardContent>
                                <CardTitle>{project.title}</CardTitle>
                                {project.tech.map((tech, techIndex) => (
                                    <React.Fragment key={techIndex}>
                                        <Spacer />
                                        <Typography
                                            variant="h6"
                                            style={{ fontWeight: 600 }}
                                        >
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
                                            {tech.description
                                                .split(",")
                                                .map((tec) => (
                                                    <div
                                                        style={{
                                                            background:
                                                                "#434343",
                                                            color: "white",
                                                            padding: "6px 12px",
                                                            borderRadius: "5px",
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
                                        color: "#434343",
                                        background: "rgb(203 213 225)",
                                        padding: ".5rem 1rem",
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        // animation:
                                        //     "glow 1.5s ease-in-out infinite",
                                    }}
                                >
                                    <motion.p
                                        initial={{ x: 50, opacity: 1 }}
                                        animate={{ x: 80, opacity: 1 }}
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
                                        animate={{ x: -80, opacity: 1 }}
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
                                            <LinkMotion>
                                                <div
                                                    style={{
                                                        textAlign: "center",
                                                        fontWeight: 600,
                                                        // animation:
                                                        //     "glow 1.5s ease-in-out infinite",
                                                    }}
                                                >
                                                    {link.title}
                                                </div>
                                            </LinkMotion>
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

const MainContainer = styled.div`
    position: relative;
    width: 340px;
    height: 400px;
    background: none;
    /* pointer-events: none;  */
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
    color: #434343;
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
`;

const CardTitle = styled.h1`
    font-size: 24px;
`;

const BackCardContent = styled(CardContent)`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    background: white;
    text-align: center;
    color: #434343;
    transform: rotateY(180deg);
`;

export default Projects;
