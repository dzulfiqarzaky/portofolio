import { motion } from "framer-motion";
import styled from "styled-components";
import Contacts, { ContactsInterface } from "./Contacts";
import { Spacer } from "./style";
import Hello from "./HelloMotion";

interface MainInterface {
    main: {
        title: string | string[];
        description: string[];
    };
    contacts: ContactsInterface;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    // border: 1px solid red;
    // padding: 1rem;

    // @media screen and (min-width: 768px) {
    //     font-size: 3rem;
    // }

    // @media screen and (min-width: 1200px) {
    //     font-size: 5rem;
    // }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 3rem;
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
    let intro: string[] = [];

    if (typeof main.title === "string") {
        intro = main.title.split("");
    }
    return (
        <>
            <Container>
                <div>
                    <Title style={{ display: "flex" }}>
                        {intro.map((letter, index) => (
                            <Hello key={index}>
                                {letter === " " ? "\u00A0" : letter}
                            </Hello>
                        ))}
                    </Title>
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
