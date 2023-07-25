import React, { ReactElement, useEffect, useState } from "react";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useIntroAnimation = (controls: AnimationControls, duration = 0.5) => {
    useEffect(() => {
        controls.start({
            opacity: 1, // Start with full opacity (fade in)
            y: 0,
            transition: {
                duration,
                ease: "easeOut",
            },
        });
    }, [controls, duration]);
};

const useOutroAnimation = (controls: AnimationControls, duration = 0.5) => {
    useEffect(() => {
        controls.start({
            opacity: 0, // Fade out to 0 opacity (fade out)
            y: 20,
            transition: {
                duration,
                ease: "easeIn",
            },
        });
    }, [controls, duration]);
};

const AnimatedComponent = ({
    duration = 0.5,
    threshold = 0.5,
    children,
    ...otherProps
}: {
    children: ReactElement<any, any>;
    duration: number;
    threshold: number;
}) => {
    const { ref, inView } = useInView({ threshold });
    const controls = useAnimation();
    const [isAnimatingBackIn, setIsAnimatingBackIn] = useState(false);

    useIntroAnimation(controls, duration);
    useOutroAnimation(controls, duration);

    useEffect(() => {
        // Check if the component is in view
        if (inView) {
            // If in view, trigger the intro animation (fade in)
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration,
                    ease: "easeOut",
                },
            });

            // If the component has reached the bottom, set the flag to animate back to the top
            setIsAnimatingBackIn(false);
        } else {
            // If not in view, trigger the outro animation (fade out)
            controls.start({
                opacity: 0,
                y: 20,
                transition: {
                    duration,
                    ease: "easeIn",
                },
            });

            // If the component is not in view and has not reached the bottom, set the flag to animate back to the top
            if (!isAnimatingBackIn) {
                setIsAnimatingBackIn(true);
            }
        }
    }, [inView, controls, duration, isAnimatingBackIn]);

    useEffect(() => {
        const handleScrollToTop = () => {
            // Check if the component is at the bottom and has finished the outro animation
            if (isAnimatingBackIn) {
                // If at the bottom, set the current section index to 0 to transition to the first section
                controls.start({
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration,
                        ease: "easeOut",
                    },
                });
                setIsAnimatingBackIn(false);
            }
        };

        window.addEventListener("scroll", handleScrollToTop);
        return () => window.removeEventListener("scroll", handleScrollToTop);
    }, [isAnimatingBackIn, controls, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            {...otherProps}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedComponent;
