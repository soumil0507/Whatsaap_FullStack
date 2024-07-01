import { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material"


//components
import Footer from "./Footer";
import Message from "./Message";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

const Wrapper = styled(Box)`
    background-image: url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`});
    background-size : 50%;
`;

const Componenet = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;


const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({person, conversation}) => {

    const {account} = useContext(AccountContext);

    const [messages, setMessages] = useState([]);

    const [newMessageFlag, setNewMessageFlag] = useState(false)

    const [value, setValue] = useState('');

    const [file, setFile] = useState();

    useEffect(() => {
        console.log("Calling useEffect to get messages");
        const getMessageDetails = async() => {
            let data = await getMessages(conversation._id);
            console.log(data);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag]);

    const sendText = async(e) =>{
        const code = e.keyCode || e.which;
        if (code === 13 && value !== ''){
            let message = {
                senderId : account.sub,
                recieverId : person.sub,
                conversationId : conversation._id,
                type : 'text',
                text : value
            }

            console.log("Sending message : "+message);

            await newMessage(message);

            setValue('');

            setNewMessageFlag(prev => !prev)
        }
    }



    return (
        <Wrapper>
            <Componenet>

                {messages && messages.map(message => (
                    <Container>
                        <Message message = {message}/>
                    </Container>
                    
                ))
            }

            </Componenet> 
            <Footer 
                sendText = {sendText} 
                setValue = {setValue} 
                value = {value}
                file = {file}
                setFile = {setFile}
            />
        </Wrapper>
    )
}

export default Messages;