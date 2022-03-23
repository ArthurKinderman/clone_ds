import React, {useRef, useEffect} from "react";

import ChannelMessage, {Mention} from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon} from './styles'


const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                
                {Array.from(Array(15).keys()).map((n) =>(
                    <ChannelMessage
                    author="Arthur Kinderman"
                    date="24/07/2005"
                    content="Hoje é meu aniversário!"
                />
                ))}

                <ChannelMessage 
                author="Caio Curtis"
                date="24/07/2005"
                content={
                    <>
                    <Mention>@Arthur Kinderman</Mention>, me carrega no Lol e CS de novo por favor?
                    </>
                }
                hasMention
                isBot
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;