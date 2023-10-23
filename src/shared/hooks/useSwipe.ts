import { useRef, useState } from "react";

const useSwipe = () => {
    const [swipedIndex, setSwipedIndex] = useState<
        { index: number; swiped: boolean }[]
    >([]);
    const [choosenIndex, setChoosenIndex] = useState<number | null>(null);
    const touchStartX = useRef<number | null>(null);
    const touchMoveX = useRef<number | null>(null);

    const swipeFn = (index: number) => {
        if (swipedIndex.length === 0) {
            setSwipedIndex([{ index, swiped: true }]);
        } else {
            setSwipedIndex((prev) => {
                const found = prev.findIndex(
                    (swiped) => swiped.index === index
                );
                if (found !== -1) {
                    const updatedSwipedIndex = [...prev];
                    updatedSwipedIndex[found].swiped =
                        !updatedSwipedIndex[found].swiped;
                    return updatedSwipedIndex;
                } else {
                    return [...prev, { index, swiped: true }];
                }
            });
        }
    };

    const handleTouchStart = (
        index: number,
        event: React.TouchEvent<HTMLDivElement>
    ) => {
        touchStartX.current = event.touches[0].clientX;
        setChoosenIndex(index);
    };

    const handleTouchMove = (
        index: number,
        event: React.TouchEvent<HTMLDivElement>
    ) => {
        if (!touchStartX.current) return;
        touchMoveX.current = event.touches[0].clientX;
    };

    const handleMouseDown = (
        index: number,
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        touchStartX.current = event.clientX;
        setChoosenIndex(index);
    };

    const handleMouseMove = (
        index: number,
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!touchStartX.current) return;
        touchMoveX.current = event.clientX;
    };

    const handleMouseUp = () => {
        if (!touchStartX.current || !touchMoveX.current) {
            touchStartX.current = null;
            touchMoveX.current = null;
            return;
        }

        const deltaX = touchMoveX.current - touchStartX.current;

        if (
            (choosenIndex || choosenIndex === 0) &&
            (deltaX > 50 || deltaX < -50)
        ) {
            swipeFn(choosenIndex);
        }

        touchStartX.current = null;
        touchMoveX.current = null;
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    return {
        handleMouseUp,
        handleTouchEnd,
        swipedIndex,
        handleTouchStart,
        handleTouchMove,
        handleMouseDown,
        handleMouseMove,
    };
};

export default useSwipe;
