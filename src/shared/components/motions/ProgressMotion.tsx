"use client";
import { CSS_CLASS } from "@/shared/constants/common";
import { motion } from "framer-motion";
import { memo } from "react";

const ProgressMotion = memo(({ children }: any) => (
    <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }} className="flat-button">
        <div>
            <span className={CSS_CLASS.BG}></span>
            <span className={CSS_CLASS.BASE}></span>
            <span className={CSS_CLASS.TEXT}>{children}</span>
        </div>
    </motion.div>
));

export default ProgressMotion;
