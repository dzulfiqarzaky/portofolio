"use client";
import { useEffect, useState } from "react";

import { main, contacts } from "@/shared/constants";
import { Title, Description } from "@/shared/components";
import { Spacer } from "@/shared/style";

import Contacts from "./components/Contacts";

const Main = () => {
    const [title, setTitle] = useState<string[]>([]);
    const [descriptions, setDescriptions] = useState<string[]>([]);

    useEffect(() => {
        const isTitleString = typeof main.title === "string";

        if (isTitleString) {
            setTitle(main.title.split(""));
        }

        const isDescriptionArray = Array.isArray(main.description);
        const isDescriptionArrayValueString = isDescriptionArray && typeof main.description[0] === "string";

        if (isDescriptionArrayValueString) {
            setDescriptions(main.description);
        }
    }, []);

    return (
        <div>
            <Title title={title} />
            <Spacer />
            <Description descriptions={descriptions} />
            <Spacer />
            <Contacts contacts={contacts} />
        </div>
    );
};

export default Main;
