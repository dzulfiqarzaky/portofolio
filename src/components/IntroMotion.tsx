import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// Types for start and end props
type AnimationDirection = "left" | "right" | "top" | "bottom";

interface IntroMotionProps {
    start: AnimationDirection;
    end: AnimationDirection;
    children: React.ReactNode;
}

const IntroMotion: React.FC<IntroMotionProps> = ({
    start = "left",
    end = "right",
    children,
}) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    // Intersection Observer options
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8, // The threshold value determines when the animation should trigger (0.8 means 80% visibility)
    };

    // Define animation properties based on start and end directions
    const animations = {
        left: { x: -20 },
        right: { x: 20 },
        top: { y: -20 },
        bottom: { y: 20 },
    };

    // Set the correct final value for the specified start direction
    animations[start] = { x: 0, y: 0 };

    // Callback for Intersection Observer
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                controls.start({
                    opacity: 1,
                    ...animations[start], // The intro animation direction
                    transition: { duration: 0.5, ease: "easeOut" },
                });
            } else {
                controls.start({
                    opacity: 0,
                    ...animations[end], // The outro animation direction
                    transition: { duration: 0.5, ease: "easeOut" },
                });
            }
        });
    };

    // Set up the Intersection Observer when the component mounts
    React.useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...animations[start] }} // The initial animation direction
            animate={controls}
            exit={{ opacity: 0, ...animations[end] }} // The final animation direction
        >
            {children}
        </motion.div>
    );
};

export default IntroMotion;
