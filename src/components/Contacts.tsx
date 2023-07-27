import { styled } from "styled-components";
import { Typography } from "@mui/material";
import Hello from "./HelloMotion";
import { colorHoverTree } from "@/app/hovertree";

export interface CustomLink {
    title: string;
    url: string;
}

export interface ContactsInterface {
    address: string;
    link: CustomLink[];
}

interface StyledLinkProps {
    glow?: boolean;
    colorHoverTree: string;
}

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

const Address = styled(Typography)`
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
    }
`;

const StyledLink = styled.a<StyledLinkProps>`
    text-decoration: none;
    color: hsla(308, 90%, 60%, 0.9);
    font-weight: bold;
    /* padding: .13rem; */

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        padding: 0.13rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
        padding: 0.23rem;
    }

    ${(props) =>
        props.glow &&
        `
    &:hover {
      padding: 2px;
      background-color: hsla(308,90%,60%,0.90);
      color: #ffff;
      position: relative;
    }

    &:not(:hover) {
        transition: background-color 3s , color 3s, position 3s;
        background-color: initial;
      }
    
  `}
`;

const Contacts = ({ contacts }: { contacts: ContactsInterface }) => {
    return (
        <Container>
            {/* <Address>{contacts.address}</Address>| */}
            {contacts.link.map((ctx, index) => (
                <StyledLink
                    colorHoverTree={colorHoverTree}
                    href={ctx.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    glow
                >
                    <Hello>{ctx.title}</Hello>
                </StyledLink>
            ))}
        </Container>
    );
};

export default Contacts;
