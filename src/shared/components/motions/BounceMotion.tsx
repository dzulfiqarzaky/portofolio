"use client";
import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";

import { ANIMATION_TEXT, COMMON, HTML_TAG } from "@/shared/constants/common";

const BounceMotion = memo(({ children }: any) => {
    const control = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);

    const elasticText = useCallback(() => {
        control.start({
            transform: ANIMATION_TEXT.TRANSFORM,
            transition: ANIMATION_TEXT.DURATION,
        });
        setIsHovered(true);
    }, [control]);

    const isChildrenString = typeof children === COMMON.STRING;

    return (
        <motion.span
            style={{ display: HTML_TAG.INLINE_STYLE.INLINE_BLOCK }}
            animate={control}
            onMouseOver={() => {
                if (!isHovered) {
                    elasticText();
                }
            }}
            onAnimationComplete={() => setIsHovered(false)}
        >
            {isChildrenString ? (
                <>
                    <StyledSpan hidden={!isHovered}>{children}</StyledSpan>
                    <span style={{ zIndex: 10 }}>{children}</span>
                </>
            ) : (
                <span style={{ zIndex: 10 }}>{children}</span>
            )}
        </motion.span>
    );
});

const StyledSpan = styled.span`
    z-index: -10;
    color: hsla(220, 90%, 10%, 0.2);
    position: fixed;
    left: -2px;
    top: 1px;

    @media screen and (min-width: 768px) {
        left: -3px;
        top: 2px;
    }

    @media screen and (min-width: 1200px) {
        left: -5px;
        top: 3px;
    }
`;

export default BounceMotion;
