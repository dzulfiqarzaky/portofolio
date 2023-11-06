"use client";
import { memo } from "react";
import { styled } from "styled-components";
import { IntroMotion, BounceMotion } from "@/shared/components/motions";
import { ANIMATION_DIRECTION, HTML_TAG } from "@/shared/constants/common";
import { Empty } from "@/shared/components/";

export interface CustomLink {
    title: string;
    url: string;
}

export interface ContactsInterface {
    address: string;
    link: CustomLink[];
}

interface StyledLinkProps {
    $glow?: string;
}

const Contacts = memo(({ contacts }: { contacts: ContactsInterface }) => {
    return (
        <IntroMotion start={ANIMATION_DIRECTION.RIGHT} end={ANIMATION_DIRECTION.BOTTOM}>
            <ContactsWrapperStyled>
                <Empty />
                <ContactsContainerStyled>
                    {contacts.link.map((contact, index) => (
                        <ContactsLinkStyled
                            href={contact.url}
                            target={HTML_TAG.TARGET}
                            rel={HTML_TAG.REL}
                            key={index}
                            $glow={"true"}
                        >
                            <BounceMotion>{contact.title}</BounceMotion>
                        </ContactsLinkStyled>
                    ))}
                </ContactsContainerStyled>
            </ContactsWrapperStyled>
        </IntroMotion>
    );
});

const ContactsWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ContactsContainerStyled = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

const ContactsLinkStyled = styled.a<StyledLinkProps>`
    text-decoration: none;
    color: hsla(220, 90%, 10%, 0.8);
    font-weight: bold;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        padding: 0.13rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
        padding: 0.23rem;
    }

    ${(props) =>
        props?.$glow === "true" &&
        `
    &:hover {
      padding: 2px;
      color: hsla(220, 90%, 10%, 0.8);
      position: relative;
    }

    &:not(:hover) {
        transition: background-color 3s , color 3s, position 3s;
        // background-color: initial;
      }
    
  `}
`;

export default Contacts;
