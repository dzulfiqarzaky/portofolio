"use client";
// Assuming EducationInterface is defined correctly
import React from "react";
import styled from "styled-components";
import {
    Spacer,
    StyledDescription,
    StyledLink,
    SubTitle,
    Title,
} from "../../components/style";
import Hello from "../../components/HelloMotion";
import LinkMotion from "../../components/LinkMotion";
import { education } from "../../constants";
import IntroMotion from "@/components/IntroMotion";

export interface EducationInterface {
    title: string;
    link: string;
    subHead: string;
    description: string;
}

const EducationContainer = styled.div`
    width: 100%;
`;

const Education = () => {
    const title = "Education".split("");
    return (
        <EducationContainer>
            <IntroMotion start="top" end="bottom">
                <Title>
                    {title.map((letter, index) => (
                        <Hello key={index}>{letter}</Hello>
                    ))}
                </Title>
            </IntroMotion>
            <Spacer />
            {education.map((edu) => (
                <React.Fragment key={edu.title}>
                    <Spacer />
                    <IntroMotion start="top" end="bottom">
                        <StyledLink
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            glow
                        >
                            <LinkMotion>
                                <SubTitle>{edu.title}</SubTitle>
                            </LinkMotion>
                        </StyledLink>
                    </IntroMotion>
                    <IntroMotion start="top" end="bottom">
                        <StyledDescription>{edu.description}</StyledDescription>
                    </IntroMotion>
                </React.Fragment>
            ))}
        </EducationContainer>
    );
};

export default Education;
