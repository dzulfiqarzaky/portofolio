"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import useSwipe from "@/shared/hooks/useSwipe";
import { projects } from "@/shared/constants";
import CardList from "./components/CardList";

const Projects = () => {
    const [projectProps, setProjectProps] = useState<typeof projects | null>(null);
    const { handleMouseUp, handleTouchEnd } = useSwipe();

    useEffect(() => {
        setProjectProps(projects);
    }, []);

    if (!projectProps) return <div></div>;

    return (
        <Box sx={{ pt: 4 }} onMouseUp={handleMouseUp} onTouchEnd={handleTouchEnd}>
            <CardList projects={projectProps} />
        </Box>
    );
};

export default Projects;
