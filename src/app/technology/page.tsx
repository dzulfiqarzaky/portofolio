"use client";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Spacer } from "@/shared/style";
import { Title } from "@/shared/components";
import { technologies } from "@/shared/constants";
import { SCREEN_SIZE, TITLE } from "@/shared/constants/common";
import Description from "./components/Description";
import useInitializeTitleDescription from "@/shared/hooks/useInitializeTitleDescription";

const Technology = memo(() => {
    const { title, descriptions } = useInitializeTitleDescription<typeof technologies>({
        titleProps: TITLE.TECHNOLOGY,
        descriptionProps: technologies,
    });
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
            <Description technologies={descriptions ?? []} svgAttributeStyle={svgAttributeStyle} />
        </TechnologyWrapper>
    );
});

const TechnologyWrapper = styled.div`
    // text-align: center;
`;

export default Technology;
