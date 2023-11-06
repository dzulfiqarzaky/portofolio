import { useState, useEffect } from "react";

type DescriptionPropsInterface<T> = T;

interface TitleDescriptionHooksInterface<T> {
    titleProps: string;
    descriptionProps: DescriptionPropsInterface<T>;
}

const useInitializeTitleDescription = <T>({ titleProps, descriptionProps }: TitleDescriptionHooksInterface<T>) => {
    const [title, setTitle] = useState<string[]>([]);
    const [descriptions, setDescriptions] = useState<DescriptionPropsInterface<T> | null>(null);

    useEffect(() => {
        const isTitleString = typeof titleProps === "string";

        if (isTitleString) {
            setTitle(titleProps.split(""));
        }

        const isDescriptionArray = Array.isArray(descriptionProps);

        if (isDescriptionArray) {
            setDescriptions(descriptionProps);
        }
    }, []);

    return { title, descriptions };
};

export default useInitializeTitleDescription;
