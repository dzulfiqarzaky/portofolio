import React, { memo } from "react";

import { IntroMotion, BounceMotion } from "./motions";

import { TitleStyled } from "../style";
import { ANIMATION_DIRECTION, COMMON } from "../constants/common";

type TitleComponentProps = {
    title: string[];
};

const Title = memo(({ title }: TitleComponentProps) => (
    <IntroMotion start={ANIMATION_DIRECTION.RIGHT} end={ANIMATION_DIRECTION.BOTTOM}>
        <TitleStyled>
            {title?.map((letter, index) => (
                <BounceMotion key={index}>{letter === COMMON.EMPTY_SPACE ? COMMON.SPACE : letter}</BounceMotion>
            ))}
        </TitleStyled>
    </IntroMotion>
));

export default Title;
