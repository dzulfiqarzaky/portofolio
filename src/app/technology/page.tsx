"use client";
import React from "react";
import { Spacer, SubTitle, Title } from "../../components/style";
import { ReactSVG } from "react-svg";
import Hello from "../../components/HelloMotion";

export interface TechnologiesInterface {
    title: string;
    data: { title: string; url: string }[];
}

const Technology = ({
    technologies,
}: {
    technologies: TechnologiesInterface[];
}) => {
    const title = "Technology".split("");
    return (
        <div>
            <Title>
                {title.map((letter, index) => (
                    <Hello key={index}>{letter}</Hello>
                ))}
            </Title>
            <Spacer />
            {technologies.map((tech) => (
                <div key={tech.title}>
                    <Spacer />
                    <SubTitle>{tech.title}</SubTitle>
                    <Spacer />
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {tech.data.map((tch) => (
                            <Hello>
                                <div
                                    style={{
                                        background: "white",
                                        padding: ".5rem",
                                        border: "3px solid rgb(203 213 225)",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <ReactSVG
                                        src={tch.url}
                                        beforeInjection={(svg) => {
                                            svg.classList.add("svg-class-name");
                                            svg.setAttribute(
                                                "style",
                                                "width: 56px; height: 56px;"
                                            );
                                        }}
                                    />
                                </div>
                            </Hello>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Technology;
