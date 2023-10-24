export const TITLE = {
    EDUCATION: "Education",
    EXPERIENCE: "Experience",
    PROJECTS: "Projects",
    SKILLS: "Skills",
    TECHNOLOGY: "Technology",
} as const;

export const COMMON = {
    STRING: "string",
    EMPTY_SPACE: " ",
    SPACE: "\u00A0",
} as const;

export const ANIMATION_DIRECTION = {
    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    BOTTOM: "bottom",
    START: "start",
    END: "end",
} as const;

export const ANIMATION_TEXT = {
    TRANSFORM: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
    ],
    DURATION: {
        duration: 0.9,
    },
};

export const HTML_TAG = {
    TARGET: "_blank",
    REL: "noopener noreferrer",
    INLINE_STYLE: {
        INLINE_BLOCK: "inline-block",
    },
} as const;

export const CSS_CLASS = {
    BG: "bg",
    BASE: "base",
    TEXT: "text",
} as const;

export const SCREEN_SIZE = {
    MOBILE: 767,
    TABLET: 1024,
    DESKTOP: 1200,
} as const;
