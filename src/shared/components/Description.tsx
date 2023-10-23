import React from "react";

import { IntroMotion, ProgressMotion } from "./motions";

import { Spacer, StyledDescription, StyledLink, SubTitle } from "../style";
import { ANIMATION_DIRECTION } from "../constants/common";

interface ObjectDescription {
    link: string;
    title: string;
    description: string;
}

interface Props {
    descriptions: (string | ObjectDescription)[];
}

const Description = ({ descriptions }: Props) => {
    if (descriptions.length === 0) {
        return null;
    }

    return (
        <div>
            {descriptions.map((description, index) => (
                <div key={index}>
                    <Spacer />
                    <IntroMotion start={ANIMATION_DIRECTION.TOP} end={ANIMATION_DIRECTION.BOTTOM}>
                        {typeof description === "string" ? (
                            <StyledDescription>{description}</StyledDescription>
                        ) : (
                            <StyledLink href={description.link} target="_blank" rel="noopener noreferrer" glow>
                                <ProgressMotion>
                                    <SubTitle>{description.title}</SubTitle>
                                </ProgressMotion>
                                <StyledDescription>{description.description}</StyledDescription>
                            </StyledLink>
                        )}
                    </IntroMotion>
                </div>
            ))}
        </div>
    );
};

export default Description;
