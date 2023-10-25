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
            <ChildrenWrapper
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                $notfull={section.notfull}
                $path={section.path}
            >
                {section.component}
            </ChildrenWrapper>
        </SectionWrapper>
    ));

const ChildrenWrapper = styled(motion.div)<{ $notfull: string; $path: string }>`
    padding: 0rem;
    border-radius: 10px;
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
    margin-top: 10rem;

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
