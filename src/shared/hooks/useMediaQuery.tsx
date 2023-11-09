import { useCallback, useEffect, useState } from "react";

const useMediaQuery = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

    const updateMedia = useCallback(() => {
        setDesktop(window.innerWidth > 700);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, [updateMedia]);

    return isDesktop;
};

export default useMediaQuery;
