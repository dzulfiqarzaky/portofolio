import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import useColorRandomizer from "@/app/useColorRandomizer";

const Hello = ({ children }: any) => {
    const { color, setPickedColor } = useColorRandomizer();

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
        setPickedColor(true);
    };
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
            <span hidden={isHovered}>{children}</span>
            <span
                style={{
                    color: color ?? "#fff",
                }}
                hidden={!isHovered}
            >
                {children}
            </span>
        </motion.span>
    );
};

export default Hello;
