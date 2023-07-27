import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { colorHoverTree } from "@/app/hovertree";
import styled from "styled-components";

const Hello = ({ children }: any) => {
    const control = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);
    const elasticText = () => {
        control.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
            transition: {
                duration: 0.9, // Set the desired transition duration in seconds
            },
        });
        setIsHovered(true);
    };

    console.log(colorHoverTree, "<<<<");
    return (
        <motion.span
            style={{ display: "inline-block" }}
            animate={control}
            onMouseOver={() => {
                if (!isHovered) {
                    elasticText();
                }
            }}
            onAnimationComplete={() => setIsHovered(false)}
        >
            {typeof children === "string" ? (
                <>
                    <StyledSpan
                        style={
                            {
                                // color: colorHoverTree,
                            }
                        }
                        hidden={!isHovered}
                    >
                        {children}
                    </StyledSpan>
                    <span style={{ zIndex: 10 }}>{children}</span>
                </>
            ) : (
                <>
                    <span style={{ zIndex: 10 }}>{children}</span>
                </>
            )}
        </motion.span>
    );
};

const StyledSpan = styled.span`
    z-index: -10;
    color: hsla(310, 100%, 56%, 0.9);
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

export default Hello;
