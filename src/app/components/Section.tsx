import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export type SectionProps = {
    component: JSX.Element;
    notFull: boolean;
    path: string;
};

const Section = ({ sections }: { sections: SectionProps[] }) =>
    sections.map((section, index) => (
        <SectionWrapper section={section} key={index}>
            <ChildrenWrapper
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                section={section}
            >
                {section.component}
            </ChildrenWrapper>
        </SectionWrapper>
    ));

const ChildrenWrapper = styled(motion.div)<{ section: SectionProps }>`
    padding: 0rem;
    border-radius: 10px;
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;

    margin-top: ${(p) => (p.section.notFull ? "10rem" : 0)};

    @media screen and (min-width: 768px) {
        padding: 2.5rem;
        width: ${(p) => (p.section.path === "/projects" ? "100%" : "90%")};
    }

    @media screen and (min-width: 1200px) {
        padding: 5rem;
        width: ${(p) => (p.section.path === "/projects" ? "100%" : "90%")};
    }
`;

const SectionWrapper = styled.div<{ section: SectionProps }>`
    width: 100vw;
    height: ${(p) => (p.section.notFull ? "auto" : "100vh")};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
export default Section;
