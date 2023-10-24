import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { COMMON } from "@/shared/constants/common";

const SwipeFooter = () => {
    return (
        <FooterWrapper>
            <motion.p
                initial={{ x: 50, opacity: 1 }}
                animate={{ x: 70, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                {COMMON.ARROW_RIGHT}
            </motion.p>
            {COMMON.SWIPE}
            <motion.p
                initial={{ x: -50, opacity: 1 }}
                animate={{ x: -70, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                {COMMON.ARROW_LEFT}
            </motion.p>
        </FooterWrapper>
    );
};

const FooterWrapper = styled(motion.div)`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    border-radius: 0 0 10px 10px;
    font-weight: 600;
    color: white;
    background: hsla(310, 100%, 56%, 0.8);
    padding: 0.5rem 1rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
`;

export default SwipeFooter;
