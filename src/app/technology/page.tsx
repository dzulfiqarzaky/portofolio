"use client";
import React, { useEffect, useState } from "react";
import { Spacer, SubTitle, Title } from "../../components/style";
import { ReactSVG } from "react-svg";
import Hello from "../../components/HelloMotion";
import { technologies } from "../../constants";
import styled from "styled-components";
import IntroMotion from "@/components/IntroMotion";

export interface TechnologiesInterface {
    title: string;
    data: { title: string; url: string }[];
}

const Technology = () => {
    const title = "Technology".split("");
    const [svgSize, setSvgSize] = useState(52);

    useEffect(() => {
        // Update the SVG size based on screen width
        const updateSvgSize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                setSvgSize(52); // Large screens
            } else if (screenWidth >= 768) {
                setSvgSize(36); // Medium screens
            } else {
                setSvgSize(24); // Small screens
            }
        };
        updateSvgSize();
        window.addEventListener("resize", updateSvgSize);
        return () => {
            window.removeEventListener("resize", updateSvgSize);
        };
    }, []);

    return (
        <TechnologyWrapper>
            <IntroMotion start="right" end="bottom">
                <Title>
                    {title.map((letter, index) => (
                        <Hello key={index}>{letter}</Hello>
                    ))}
                </Title>
            </IntroMotion>
            <Spacer style={{ marginTop: "5vw" }} />
            {technologies.map((tech) => (
                <div key={tech.title}>
                    <Spacer />
                    <IntroMotion start="right" end="bottom">
                        <SubTitle>{tech.title}</SubTitle>
                    </IntroMotion>
                    <Spacer />
                    <TechnologyContainer>
                        {tech.data.map((tch) => (
                            <Hello key={tch.title}>
                                <IntroMotion start="right" end="bottom">
                                    <TechIconWrapper>
                                        <ReactSVG
                                            src={tch.url}
                                            beforeInjection={(svg) => {
                                                svg.classList.add(
                                                    "svg-class-name"
                                                );
                                                svg.setAttribute(
                                                    "style",
                                                    `width: ${svgSize}px; height: ${svgSize}px;`
                                                );
                                            }}
                                        />
                                    </TechIconWrapper>
                                </IntroMotion>
                            </Hello>
                        ))}
                    </TechnologyContainer>
                </div>
            ))}
        </TechnologyWrapper>
    );
};

const TechnologyWrapper = styled.div`
    /* Center the title */
    text-align: center;
`;

const TechnologyContainer = styled.div`
    /* Gap between items */
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

const TechIconWrapper = styled.div`
    background: white;
    padding: 0.5rem;
    border: 3px solid rgb(203, 213, 225);
    border-radius: 10px;
`;

export default Technology;
