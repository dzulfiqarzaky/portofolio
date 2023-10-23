"use client";
import React from "react";
import YonduQuill from "@/shared/style/YonduQuill";

import Main from "./main/page";
import Education from "./education/page";
import Experiences from "./experience/page";
import Technology from "./technology/page";
import Projects from "./project/page";
import Section from "./components/Section";

const sections = [
    {
        component: <Main />,
        notFull: false,
        path: "/",
    },
    {
        component: <Education />,
        notFull: false,
        path: "/education",
    },
    {
        component: <Experiences />,
        notFull: false,
        path: "/experiences",
    },
    {
        component: <Technology />,
        notFull: true,
        path: "/technology",
    },
    {
        component: <Projects />,
        notFull: true,
        path: "/projects",
    },
];

const Home = () => {
    return (
        <div>
            <YonduQuill />
            <Section sections={sections} />
        </div>
    );
};

export default Home;
