"use client";
import React from "react";
import styled from "styled-components";
import { ProgressMotion } from "@/shared/components/motions/";
import { Spacer } from "@/shared/style";

import { ProjectInterface } from "./CardList";
import { CardContent } from "./FrontCard";
import { CardDescription, CardSubTitle, CardTitle } from "./Card";
import { CARD_FEATURE, HTML_TAG } from "@/shared/constants/common";

type BackCardProps = { project: ProjectInterface };

const BackCard = ({ project }: BackCardProps) => {
    return (
        <BackCardContent>
            <CardTitle>{project.title}</CardTitle>
            <Spacer />
            <CardDescription>{project.description}</CardDescription>
            <Spacer />
            <CardSubTitle>{CARD_FEATURE}</CardSubTitle>
            <Spacer />
            <CardDescription>{project.feat}</CardDescription>
            <Spacer />
            <ButtonContainer>
                {project.link.map((link, linkIndex) => (
                    <a href={link.url} target={HTML_TAG.TARGET} rel={HTML_TAG.REL} key={linkIndex}>
                        <ProgressMotion>
                            <LinkButton>{link.title}</LinkButton>
                        </ProgressMotion>
                    </a>
                ))}
            </ButtonContainer>
        </BackCardContent>
    );
};

const BackCardContent = styled(CardContent)`
    position: absolute;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: white;
    text-align: center;
    color: hsla(220, 90%, 10%, 0.8);
    transform: rotateY(180deg);
    scrollbar-width: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LinkButton = styled.div`
    font-weight: 600;
`;
export default BackCard;
