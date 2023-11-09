"use client";
import { main, contacts } from "@/shared/constants";
import { Title, Description } from "@/shared/components";
import { Spacer } from "@/shared/style";
import useInitializeTitleDescription from "@/shared/hooks/useInitializeTitleDescription";

import Contacts from "./components/Contacts";
import { useEffect, useState } from "react";

const Main = () => {
    const { title, descriptions } = useInitializeTitleDescription<string[]>({
        titleProps: main.title,
        descriptionProps: main.description,
    });
    const [contactProps, setContactProps] = useState<typeof contacts | null>(null);

    useEffect(() => {
        setContactProps(contacts);
    }, []);

    if (!contactProps || !descriptions) return <div></div>;

    return (
        <div>
            <Title title={title} />
            <Spacer />
            <Description descriptions={descriptions} mainPage />
            <Spacer />
            <Contacts contacts={contactProps} />
        </div>
    );
};

export default Main;
