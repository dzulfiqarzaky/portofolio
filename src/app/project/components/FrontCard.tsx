import React from "react";
import { ProjectInterface } from "./CardList";
import styled from "styled-components";
import { Spacer, StyledDescription, SubTitle } from "@/shared/style";
import { SwipeFooter } from "@/shared/components";
import { CardTitle } from "./Card";

const FrontCard = ({ project }: { project: ProjectInterface }) => {
    return (
        <CardContent>
            <CardTitle>{project.title}</CardTitle>
            <Spacer />
            {project.tech.map((tech, techIndex) => (
                <React.Fragment key={techIndex}>
                    <Spacer />
                    <SubTitle>{tech.title}</SubTitle>
                    <Spacer />
                    <TechStackListContainer>
                        {tech.description.split(",").map((techName, index) => (
                            <TechStackBadge key={index}>
                                <StyledDescription>{techName}</StyledDescription>
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
    color: #434343;
    scrollbar-width: none;
`;

const TechStackListContainer = styled.div`
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    padding-bottom: 1rem;
`;

const TechStackBadge = styled.div`
    background: hsla(220, 90%, 50%, 0.8);
    color: white;
    padding: 1px 4px;
    border-radius: 4px;
`;

export default FrontCard;
