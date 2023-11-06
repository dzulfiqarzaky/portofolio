"use client";
import React, { memo } from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

import { BounceMotion, IntroMotion } from "@/shared/components/motions";
import { ANIMATION_DIRECTION } from "@/shared/constants/common";

export interface TechnologiesInterface {
    title: string;
    data: { title: string; url: string }[];
}

type DescriptionIconProps = {
    technology: TechnologiesInterface;
    svgAttributeStyle: string;
};

const DescriptionIcon = memo(({ technology, svgAttributeStyle }: DescriptionIconProps) => {
    return (
        <TechnologyContainer>
            {technology.data.map((icon) => (
                <BounceMotion key={icon.title}>
                    <IntroMotion start={ANIMATION_DIRECTION.RIGHT} end={ANIMATION_DIRECTION.BOTTOM}>
                        <TechIconWrapper>
                            <ReactSVG
                                src={icon.url}
                                beforeInjection={(svg) => {
                                    svg.classList.add("svg-class-name");
                                    svg.setAttribute("style", svgAttributeStyle);
                                }}
                            />
                        </TechIconWrapper>
                    </IntroMotion>
                </BounceMotion>
            ))}
        </TechnologyContainer>
    );
});

const TechnologyContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding-bottom: 1rem;
`;

const TechIconWrapper = styled.div`
    background: white;
    padding: 0.5rem;
    border: 3px solid rgb(203, 213, 225);
    border-radius: 10px;
`;

export default DescriptionIcon;
