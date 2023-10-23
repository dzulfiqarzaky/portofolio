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
    padding: 5rem;
    border-radius: 10px;
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
    background: hsla(220, 90%, 50%, 0.2);
    background: url("../public/5162027.jpg");
    margin-top: ${(p) => (p.section.notFull ? "10rem" : 0)};

    @media screen and (max-width: 768px) {
        padding: 0rem;
        width: ${(p) => (p.section.path === "/projects" ? "100%" : "90%")};
    }

    @media screen and (max-width: 1200px) {
        padding: 3rem;
        width: ${(p) => (p.section.path === "/projects" ? "100%" : "90%")};
    }
`;

const SectionWrapper = styled.div<{ section: SectionProps }>`
    width: 100vw;
    height: ${(p) => (p.section.notFull ? "auto" : "100vh")};
    background: hsla(200, 90%, 50%, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
export default Section;
