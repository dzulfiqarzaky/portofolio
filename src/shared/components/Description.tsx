"use client";
import React, { memo } from "react";
import styled from "styled-components";

import { IntroMotion, ProgressMotion } from "./motions";

import { Spacer, StyledDescription, StyledLink, SubTitle } from "../style";
import { ANIMATION_DIRECTION } from "../constants/common";
import { main } from "../constants";

interface ObjectDescription {
    link: string;
    title: string;
    description: string;
}

interface Props {
    descriptions: (string | ObjectDescription)[];
    mainPage?: boolean;
}

const Description = memo(({ descriptions, mainPage }: Props) =>
    descriptions?.map((description, index) => (
        <div key={index}>
            <Spacer />
            <IntroMotion start={ANIMATION_DIRECTION.TOP} end={ANIMATION_DIRECTION.BOTTOM}>
                {typeof description === "string" ? (
                    <StyledDescription>{description}</StyledDescription>
                ) : (
                    <StyledLink href={description.link} target="_blank" rel="noopener noreferrer">
                        <ProgressMotion>
                            <SubTitle>{description.title}</SubTitle>
                        </ProgressMotion>
                        <StyledDescription>{description.description}</StyledDescription>
                    </StyledLink>
                )}
                {mainPage && main && (
                    <WorkContainer>
                        <StyledDescription>{main.work.description}</StyledDescription>
                        <Spacer />
                        <CompanyStyledLink href={main.work.link} target="_blank" rel="noopener noreferrer">
                            <CompanyStyledDescription>{main.work.company}</CompanyStyledDescription>
                        </CompanyStyledLink>
                    </WorkContainer>
                )}
            </IntroMotion>
        </div>
    ))
);

const WorkContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const CompanyStyledLink = styled(StyledLink)`
    margin-left: 0.5rem;
    color: rgb(0, 141, 66);

    &:hover {
        color: rgba(0, 141, 66, 0.5);
    }
`;

const CompanyStyledDescription = styled(StyledDescription)`
    font-weight: bold;
`;

export default Description;
