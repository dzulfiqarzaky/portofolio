"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Spacer } from "@/shared/style";
import { Title } from "@/shared/components";
import { technologies } from "@/shared/constants";
import { SCREEN_SIZE, TITLE } from "@/shared/constants/common";
import Description from "./components/Description";

const Technology = () => {
    const title = TITLE.TECHNOLOGY.split("");
    const [svgSize, setSvgSize] = useState(52);

    useEffect(() => {
        const updateSvgSize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= SCREEN_SIZE.DESKTOP) {
                setSvgSize(screenWidth * 0.02);
            } else if (screenWidth >= SCREEN_SIZE.MOBILE) {
                setSvgSize(screenWidth * 0.03);
            } else {
                setSvgSize(screenWidth * 0.04);
            }
        };
        updateSvgSize();
        window.addEventListener("resize", updateSvgSize);
        return () => {
            window.removeEventListener("resize", updateSvgSize);
        };
    }, []);

    const svgAttributeStyle = `width: ${svgSize}px; height: ${svgSize}px;`;

    return (
        <TechnologyWrapper>
            <Title title={title} />
            <Spacer style={{ marginTop: "5vw" }} />
            <Description technologies={technologies} svgAttributeStyle={svgAttributeStyle} />
        </TechnologyWrapper>
    );
};

const TechnologyWrapper = styled.div`
    // text-align: center;
`;

export default Technology;
