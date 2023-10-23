"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { Spacer, SubTitle } from "@/shared/style";
import { IntroMotion, BounceMotion } from "@/shared/components/motions";
import { Title } from "@/shared/components";
import { technologies } from "@/shared/constants";
import { TITLE } from "@/shared/constants/common";

export interface TechnologiesInterface {
    title: string;
    data: { title: string; url: string }[];
}

const Technology = () => {
    const title = TITLE.TECHNOLOGY.split("");
    const [svgSize, setSvgSize] = useState(52);

    useEffect(() => {
        const updateSvgSize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                setSvgSize(52);
            } else if (screenWidth >= 768) {
                setSvgSize(36);
            } else {
                setSvgSize(24);
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
            <Title title={title} />
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
                            <BounceMotion key={tch.title}>
                                <IntroMotion start="right" end="bottom">
                                    <TechIconWrapper>
                                        <ReactSVG
                                            src={tch.url}
                                            beforeInjection={(svg) => {
                                                svg.classList.add("svg-class-name");
                                                svg.setAttribute("style", `width: ${svgSize}px; height: ${svgSize}px;`);
                                            }}
                                        />
                                    </TechIconWrapper>
                                </IntroMotion>
                            </BounceMotion>
                        ))}
                    </TechnologyContainer>
                </div>
            ))}
        </TechnologyWrapper>
    );
};

const TechnologyWrapper = styled.div`
    text-align: center;
`;

const TechnologyContainer = styled.div`
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
