"use client";
import React from "react";
import {
    Spacer,
    StyledDescription,
    StyledLink,
    SubTitle,
    Title,
} from "../../components/style";
import LinkMotion from "../../components/LinkMotion";
import Hello from "../../components/HelloMotion";

export interface ExperienceInterface {
    title: string;
    link: string;
    description: string;
}

const Experiences = ({
    experiences,
}: {
    experiences: ExperienceInterface[];
}) => {
    const title = "Experience".split("");
    return (
        <div>
            <Title>
                {title.map((letter, index) => (
                    <Hello key={index}>{letter}</Hello>
                ))}
            </Title>
            <Spacer />
            {experiences.map((exp, index) => (
                <div key={index}>
                    <Spacer />
                    <StyledLink
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkMotion>
                            <SubTitle>{exp.title}</SubTitle>
                        </LinkMotion>
                    </StyledLink>
                    <StyledDescription>{exp.description}</StyledDescription>
                </div>
            ))}
        </div>
    );
};

export default Experiences;
