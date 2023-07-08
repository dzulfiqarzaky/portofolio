import { motion } from 'framer-motion';
import styled from 'styled-components';
import Contacts from './Contacts';
import { Spacer } from './style';

interface MainInterface {
  main: {
    title: string;
    description: string[];
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: justify;
  text-justify: inter-word;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = ({ main, contacts }: MainInterface) => {
  

  return (
    <>
      <Container>
        <div>
          <Title>{main.title}</Title>
          <Spacer />
          <div>
            {main.description.map((des, index) => (
              <Description key={index}>{des}</Description>
            ))}
          </div>
          <Spacer />
          <ContactsWrapper>
            <div></div>
            <Contacts contacts={contacts} />
          </ContactsWrapper>

          </div>
      </Container>
    </>
  );
};

export default Main;
