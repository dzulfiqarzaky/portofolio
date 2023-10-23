import Link from "next/link";
import styled from "styled-components";

export const Spacer = styled.div`
    margin-top: 1rem;
`;

export const TitleStyled = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 3rem;
    }
`;

export const SubTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 2rem;
    }
`;

export const StyledDescription = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    text-align: justify;
    text-justify: inter-word;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.2rem;
    }
`;

export const StyledLink = styled(Link)<{ glow?: boolean }>`
    text-decoration: none;
    font-weight: bold;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
    }
`;
