"use client";
import React from "react";
import styled from "styled-components";
import { ProjectInterface } from "./CardList";
import { Spacer } from "@/shared/style";
import { SwipeFooter } from "@/shared/components";
import { CardSubTitle, CardTitle } from "./Card";

const FrontCard = ({ project }: { project: ProjectInterface }) => {
    return (
        <CardContent>
            <CardTitle>{project.title}</CardTitle>
            <Spacer />
            {project.tech.map((tech, techIndex) => (
                <React.Fragment key={techIndex}>
                    <Spacer />
                    <CardSubTitle>{tech.title}</CardSubTitle>
                    <Spacer />
                    <TechStackListContainer>
                        {tech.description.split(",").map((techName, index) => (
                            <TechStackBadge key={index}>
                                <TechStackDescription>{techName}</TechStackDescription>
                            </TechStackBadge>
                        ))}
                    </TechStackListContainer>
                </React.Fragment>
            ))}
            <Spacer />
            <SwipeFooter />
        </CardContent>
    );
};

export const CardContent = styled.div`
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
    color: hsla(220, 90%, 10%, 0.8);
    scrollbar-width: none;
`;

const TechStackListContainer = styled.div`
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;
    padding-bottom: 1rem;
`;

const TechStackBadge = styled.div`
    background: hsla(220, 90%, 10%, 0.8);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
`;

const TechStackDescription = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
`;
export default FrontCard;
