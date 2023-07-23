import { useEffect, useState } from "react";

const useColorRandomizer = () => {
    const colors = [
        "#ff4081", // Vibrant Pink
        "#ffea00", // Vibrant Yellow
        "#ff9800", // Vibrant Orange
        "#00bcd4", // Vibrant Cyan
        "#4caf50", // Vibrant Green
        "#f44336", // Vibrant Red
        "#2196f3", // Vibrant Blue
        "#9c27b0", // Vibrant Purple
        "#009688", // Vibrant Teal
        "#e91e63", // Vibrant Magenta
    ];

    const [color, setColor] = useState<string | null>("#fff");
    const [pickedColor, setPickedColor] = useState(false);

    useEffect(() => {
        const randomIndex = () => Math.floor(Math.random() * colors.length);
        const generateRandomColor = () => {
            const randomColor = colors[randomIndex()];
            setColor(randomColor);
        };
        if (pickedColor) {
            generateRandomColor();
            setPickedColor(false);
        }
    }, [pickedColor]);

    return { color, setPickedColor };
};

export default useColorRandomizer;
