"use client";
import React from "react";
import Box from "@mui/material/Box";

import useSwipe from "@/shared/hooks/useSwipe";
import { projects } from "@/shared/constants";
import CardList from "./components/CardList";

const Projects = () => {
    const { handleMouseUp, handleTouchEnd } = useSwipe();

    return (
        <Box sx={{ pt: 4 }} onMouseUp={handleMouseUp} onTouchEnd={handleTouchEnd}>
            <CardList projects={projects} />
        </Box>
    );
};

export default Projects;
