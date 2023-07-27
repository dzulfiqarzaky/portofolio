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
import { experiences } from "../../constants";
import IntroMotion from "@/components/IntroMotion";

export interface ExperienceInterface {
    title: string;
    link: string;
    description: string;
}

const Experiences = () => {
    const title = "Experience".split("");
    return (
        <div>
            <IntroMotion start="right" end="bottom">
                <Title>
                    {title.map((letter, index) => (
                        <Hello key={index}>{letter}</Hello>
                    ))}
                </Title>
            </IntroMotion>
            <Spacer />
            {experiences.map((exp, index) => (
                <div key={index}>
                    <Spacer />
                    <StyledLink
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IntroMotion start="right" end="bottom">
                            <LinkMotion>
                                <SubTitle>{exp.title}</SubTitle>
                            </LinkMotion>
                        </IntroMotion>
                    </StyledLink>
                    <IntroMotion start="right" end="bottom">
                        <StyledDescription>{exp.description}</StyledDescription>
                    </IntroMotion>
                </div>
            ))}
        </div>
    );
};

export default Experiences;
