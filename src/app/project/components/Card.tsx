import React from "react";
import styled from "styled-components";

import useSwipe from "@/shared/hooks/useSwipe";

import { ProjectInterface } from "./CardList";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const Card = ({ project, index }: { project: ProjectInterface; index: number }) => {
    const {
        handleMouseUp,
        handleTouchEnd,
        swipedIndex,
        handleTouchStart,
        handleTouchMove,
        handleMouseDown,
        handleMouseMove,
    } = useSwipe();

    return (
        <CardWrapper
            className={
                swipedIndex?.filter((swiped) => swiped?.index === index) &&
                swipedIndex?.filter((swiped) => swiped?.index === index)[0]?.swiped
                    ? "swiped"
                    : ""
            }
            onTouchStart={(event: React.TouchEvent<HTMLDivElement>) => handleTouchStart(index, event)}
            onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => handleTouchMove(index, event)}
            onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => handleMouseDown(index, event)}
            onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => handleMouseMove(index, event)}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleTouchEnd}
        >
            <FrontCard project={project} />
            <BackCard project={project} />
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    position: relative;
    background: white;
    user-select: none;
    background: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    width: 300px;
    height: 400px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    background: #ffc728;
    touch-action: pan-x;
    pointer-events: auto;
    border: 3px solid rgb(203 213 225);
    border-radius: 10px;

    &.swiped {
        transform: rotateY(180deg);
    }

    @media screen and (max-width: 768px) {
        width: 270px;
        height: 400px;
    }
`;

export const CardTitle = styled.h1`
    font-size: 22px;
`;

export default Card;
