import { styled } from 'styled-components';
import { Typography } from '@mui/material';

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
  color: #ff5100;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }

  ${props =>
    props.glow &&
    `
    &:hover {
      color: #ffa600; /* Replace with your desired glow color */
    }
  `}
`;

const Contacts = ({ contacts }: {contacts: ContactsInterface}) => {
  return (
    <Container>
      <Address>{contacts.address}</Address>
      |
      {contacts.link.map((ctx, index) => (
        <StyledLink href={ctx.url} target="_blank" rel="noopener noreferrer" key={index} glow>
          {ctx.title}
        </StyledLink>
      ))}
    </Container>
  );
};

export default Contacts;
