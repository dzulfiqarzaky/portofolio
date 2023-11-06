"use client";
import React from "react";
import { Spacer } from "@/shared/style";
import { experiences } from "@/shared/constants";
import { Title, Description } from "@/shared/components";
import { TITLE } from "@/shared/constants/common";
import useInitializeTitleDescription from "@/shared/hooks/useInitializeTitleDescription";

export interface ExperienceInterface {
    title: string;
    link: string;
    description: string;
}

const Experiences = () => {
    const { title, descriptions } = useInitializeTitleDescription<ExperienceInterface[]>({
        titleProps: TITLE.EXPERIENCE,
        descriptionProps: experiences,
    });

    return (
        <div>
            <Title title={title} />
            <Spacer />
            <Description descriptions={descriptions ?? []} />
        </div>
    );
};

export default Experiences;
