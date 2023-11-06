"use client";
import Link from "next/link";
import styled from "styled-components";

export const Spacer = styled.div`
    margin-top: 1rem;
`;

export const TitleStyled = styled.h1`
    font-size: 2rem;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 4rem;
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
    font-size: 0.75rem;
    font-weight: 400;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.75;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.25rem;
    }
`;

export const StyledLink = styled(Link)`
    font-size: 0.75rem;
    text-decoration: none;
    font-weight: bold;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
    }
`;
