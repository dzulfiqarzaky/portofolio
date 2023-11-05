import React, { memo } from "react";
import { Spacer, SubTitle } from "@/shared/style";
import { IntroMotion } from "@/shared/components/motions";
import { ANIMATION_DIRECTION } from "@/shared/constants/common";

import DescriptionIcon, { TechnologiesInterface } from "./DescriptionIcon";

interface DescriptionProps {
    technologies: TechnologiesInterface[];
    svgAttributeStyle: string;
}
const Description = memo(({ technologies, svgAttributeStyle }: DescriptionProps) => {
    return technologies.map((technology) => (
        <div key={technology.title}>
            <Spacer />
            <IntroMotion start={ANIMATION_DIRECTION.RIGHT} end={ANIMATION_DIRECTION.BOTTOM}>
                <SubTitle>{technology.title}</SubTitle>
            </IntroMotion>
            <Spacer />
            <DescriptionIcon technology={technology} svgAttributeStyle={svgAttributeStyle} />
        </div>
    ));
});

export default Description;
