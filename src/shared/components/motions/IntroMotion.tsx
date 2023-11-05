import React, { useRef, useEffect, useCallback, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { ANIMATION_DIRECTION } from "@/shared/constants/common";

type AnimationDirection = "left" | "right" | "top" | "bottom";

interface IntroMotionProps {
    start: AnimationDirection;
    end: AnimationDirection;
    children: React.ReactNode;
}

const IntroMotion: React.FC<IntroMotionProps> = memo(
    ({ start = ANIMATION_DIRECTION.LEFT, end = ANIMATION_DIRECTION.RIGHT, children }) => {
        const controls = useAnimation();
        const ref = useRef<HTMLDivElement>(null);

        const intersectionObserverOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        };

        const animations = {
            left: { x: -20 },
            right: { x: 20 },
            top: { y: -20 },
            bottom: { y: 20 },
        };

        animations[start] = { x: 0, y: 0 };

        const handleIntersection = useCallback(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start({
                            opacity: 1,
                            ...animations[start],
                            transition: { duration: 0.5, ease: "easeOut" },
                        });
                    } else {
                        controls.start({
                            opacity: 0,
                            ...animations[end],
                            transition: { duration: 0.5, ease: "easeOut" },
                        });
                    }
                });
            },
            [controls, animations, start, end]
        );

        useEffect(() => {
            const observer = new IntersectionObserver(handleIntersection, intersectionObserverOptions);

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [ref, controls, intersectionObserverOptions]);

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, ...animations[start] }}
                animate={controls}
                exit={{ opacity: 0, ...animations[end] }}
            >
                            {children}       {" "}
            </motion.div>
        );
    }
);

export default IntroMotion;
