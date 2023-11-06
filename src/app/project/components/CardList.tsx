"use client";
import React from "react";
import styled from "styled-components";

import { IntroMotion } from "@/shared/components/motions/";

import Card from "./Card";

interface TechnologyInterface {
    title: string;
    description: string;
}

interface LinkInterface {
    title: string;
    url: string;
}

export interface ProjectInterface {
    title: string;
    description: string;
    feat?: string;
    tech: TechnologyInterface[];
    link: LinkInterface[];
}

const CardList = ({ projects }: { projects: ProjectInterface[] }) => {
    return (
        <CardListContainer>
            {projects.map((project, index) => (
                <IntroMotion start="right" end="bottom" key={index}>
                    <Card project={project} index={index} />
                </IntroMotion>
            ))}
        </CardListContainer>
    );
};

const CardListContainer = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export default CardList;
