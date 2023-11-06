"use client";
import React, { useEffect, useState } from "react";
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
    const [title, setTitle] = useState<string[]>([]);
    const [descriptions, setDescriptions] = useState<ExperienceInterface[]>([]);

    useEffect(() => {
        const isTitleString = typeof TITLE.EXPERIENCE === "string";

        if (isTitleString) {
            setTitle(TITLE.EXPERIENCE.split(""));
        }

        const isDescriptionArray = Array.isArray(experiences);

        if (isDescriptionArray) {
            setDescriptions(experiences);
        }
    }, []);

    return (
        <div>
            <Title title={title} />
            <Spacer />
            <Description descriptions={descriptions} />
        </div>
    );
};

export default Experiences;
