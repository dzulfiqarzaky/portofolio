"use client";
import React from "react";
import { Spacer } from "@/shared/style";
import { experiences } from "@/shared/constants";
import { Title, Description } from "@/shared/components";
import { TITLE } from "@/shared/constants/common";

export interface ExperienceInterface {
    title: string;
    link: string;
    description: string;
}

const Experiences = () => {
    const title = TITLE.EXPERIENCE.split("");

    return (
        <div>
            <Title title={title} />
            <Spacer />
            <Description descriptions={experiences} />
        </div>
    );
};

export default Experiences;
