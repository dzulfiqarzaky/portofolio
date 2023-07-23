"use client";
import styled from "styled-components";
import Contacts, { ContactsInterface } from "../../components/Contacts";
import { Spacer, StyledDescription, Title } from "../../components/style";
import Hello from "../../components/HelloMotion";
import { main, contacts } from "../../constants";
interface MainInterface {
    main: {
        title: string | string[];
        description: string[];
    };
    contacts: ContactsInterface;
}

const Main = () => {
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
                            <StyledDescription key={index}>
                                {des}
                            </StyledDescription>
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

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContactsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default Main;
