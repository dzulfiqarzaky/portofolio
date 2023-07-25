import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { colorHoverTree } from "@/app/hovertree";

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
                    <span
                        style={{
                            zIndex: -10,
                            position: "fixed",
                            color: colorHoverTree,
                            left: -5,
                            top: 5,
                        }}
                        hidden={!isHovered}
                    >
                        {children}
                    </span>
                    <span style={{ zIndex: 10 }}>{children}</span>
                </>
            ) : (
                <>
                    {/* <div
                        style={{
                            zIndex: -10,
                            position: "fixed",
                            backgroundColor: colorHoverTree,
                            left: -5,
                            top: 5,
                            width: "300px",
                            height: "300px",
                        }}
                        hidden={!isHovered}
                    ></div> */}
                    <span style={{ zIndex: 10 }}>{children}</span>
                </>
            )}
        </motion.span>
    );
};

export default Hello;
