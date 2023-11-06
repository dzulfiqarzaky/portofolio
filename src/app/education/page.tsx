"use client";
import React from "react";
import styled from "styled-components";
import useInitializeTitleDescription from "@/shared/hooks/useInitializeTitleDescription";
import { Spacer } from "@/shared/style";
import { education } from "@/shared/constants";
import { Title, Description } from "@/shared/components";
import { TITLE } from "@/shared/constants/common";

export interface EducationInterface {
    title: string;
    link: string;
    subHead: string;
    description: string;
}

const Education = () => {
    const { title, descriptions } = useInitializeTitleDescription<EducationInterface[]>({
        titleProps: TITLE.EDUCATION,
        descriptionProps: education,
    });

    if (!descriptions) return <div></div>;

    return (
        <EducationContainer>
            <Title title={title} />
            <Spacer />
            <Description descriptions={descriptions} />
        </EducationContainer>
    );
};

const EducationContainer = styled.div`
    width: 100%;
`;

export default Education;
