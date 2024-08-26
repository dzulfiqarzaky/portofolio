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
                setSvgSize(48);
            } else if (screenWidth >= SCREEN_SIZE.MOBILE) {
                setSvgSize(36);
            } else {
                setSvgSize(18);
            }
        };
        updateSvgSize();
        window.addEventListener("resize", updateSvgSize);
        return () => {
            window.removeEventListener("resize", updateSvgSize);
        };
    }, []);

    const svgAttributeStyle = `width: ${svgSize}px; height: ${svgSize}px;`;

    if (!descriptions) return <div></div>;

    return (
        <>
            <Title title={title} />
            <Spacer />
            <Description technologies={descriptions} svgAttributeStyle={svgAttributeStyle} />
        </>
    );
});

export default Technology;
