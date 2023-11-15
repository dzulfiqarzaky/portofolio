import { useCallback, useEffect, useState } from "react";

const useMediaQuery = () => {
    const [isDesktop, setDesktop] = useState(false);

    const updateMedia = useCallback(() => {
        if (typeof window !== "undefined") {
            setDesktop(window.innerWidth > 700);
        }
    }, []);

    useEffect(() => {
        updateMedia();

        if (typeof window !== "undefined") {
            window.addEventListener("resize", updateMedia);
            return () => window.removeEventListener("resize", updateMedia);
        }
    }, [updateMedia]);

    return isDesktop;
};

export default useMediaQuery;
