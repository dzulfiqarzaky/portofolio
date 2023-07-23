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

export interface EducationInterface {
    title: string;
    link: string;
    subHead: string;
    description: string;
}

const EducationContainer = styled.div`
    width: 100%;
`;

const Education = ({ education }: { education: EducationInterface[] }) => {
    const title = "Education".split("");
    return (
        <EducationContainer>
            <Title>
                {title.map((letter, index) => (
                    <Hello key={index}>{letter}</Hello>
                ))}
            </Title>
            <Spacer />
            {education.map((edu) => (
                <React.Fragment key={edu.title}>
                    <Spacer />
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
                    <StyledDescription>{edu.description}</StyledDescription>
                </React.Fragment>
            ))}
        </EducationContainer>
    );
};

export default Education;
