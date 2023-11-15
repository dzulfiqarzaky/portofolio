import { useCallback, useEffect, useState } from "react";

type DesktopScreenSize = boolean;

const useMediaQuery = (desktopScreenSize: DesktopScreenSize) => {
    const [isDesktop, setDesktop] = useState(desktopScreenSize);

    const updateMedia = useCallback(() => {
        setDesktop(desktopScreenSize);
    }, [desktopScreenSize]);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, [updateMedia]);

    return isDesktop;
};

export default useMediaQuery;
