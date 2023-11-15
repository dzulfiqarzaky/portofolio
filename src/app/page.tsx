"use client";
import React, { useCallback } from "react";
import YonduQuill from "@/shared/style/YonduQuill";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

import Main from "./main/page";
import Education from "./education/page";
import Experiences from "./experience/page";
import Technology from "./technology/page";
import Projects from "./project/page";
import Section from "./components/Section";

const sections = [
    {
        component: <Main />,
        notfull: "false",
        path: "/",
    },
    {
        component: <Experiences />,
        notfull: "false",
        path: "/experiences",
    },
    {
        component: <Education />,
        notfull: "false",
        path: "/education",
    },
    {
        component: <Technology />,
        notfull: "true",
        path: "/technology",
    },
    {
        component: <Projects />,
        notfull: "true",
        path: "/projects",
    },
];

const Home = () => {
    const isDesktop = useMediaQuery();

    return (
        <div>
            {isDesktop && <YonduQuill />}
            <Section sections={sections} />
        </div>
    );
};

export default Home;
