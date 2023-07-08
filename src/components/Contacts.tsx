import { styled } from '@mui/system';
import { Typography, Link } from '@mui/material';
import { css } from 'styled-components';


export interface Link {
    title: String;
    url: String;
}
export interface ContactsInterface {
    address: String;
    phone: String;
    link: Link[];
}

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
  }));
  
  const Address = styled(Typography)`
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
    }
  `;
  
  const StyledLink = styled(Link)`
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
      css`
        &:hover {
          color: #ffa600; /* Replace with your desired glow color */
        }
      `}
  `;
  

  const Contacts = ({ contacts }: ContactsInterface) => {
    return (
      <Container>
        <Address>
          {contacts.address}
        </Address>
        |
        {contacts.link.map((ctx, index) => (
          <StyledLink href={ctx.url} target="_blank" rel="noopener noreferrer" key={index} glow>
            {ctx.title}
          </StyledLink>
        ))}
      </Container>
    );
  }
  

export default Contacts