import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export type SectionProps = {
    component: JSX.Element;
    notfull: string;
    path: string;
};

const Section = ({ sections }: { sections: SectionProps[] }) =>
    sections.map((section, index) => (
        <SectionWrapper $notfull={section.notfull} key={index}>
            <ChildrenWrapper $notfull={section.notfull} $path={section.path}>
                {section.component}
            </ChildrenWrapper>
        </SectionWrapper>
    ));

const ChildrenWrapper = styled.div<{ $notfull: string; $path: string }>`
    padding: 0rem;
    border-radius: 10px;
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
    margin-top: 0;

    @media screen and (min-width: 768px) {
        padding: 2.5rem;
        width: ${(p) => (p?.$path === "/projects" ? "100%" : "90%")};
    }

    @media screen and (min-width: 1200px) {
        padding: 5rem;
        width: ${(p) => (p?.$path === "/projects" ? "100%" : "90%")};
    }
`;

const SectionWrapper = styled.div<{ $notfull: string }>`
    width: 100vw;
    height: ${(p) => (p?.$notfull === "true" ? "auto" : "100vh")};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
export default Section;
