import {emptyChatImage} from "../../../constants/data";
import {Box, Typography, styled, Divider} from '@mui/material';

const Component = styled(Box)`
    background: #f8f9f8;
    padding : 30px 0;
    text-align: center;
    height: 100vh;
`

const Container = styled(Box)`
    padding: 0 200px
`;

const Image = styled('img')({
    marginTop: 100,
    width: 400
})

const Title = styled(Typography)`
    font-size : 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight : 300;
    color : #41525d;
`;

const SubTitle = styled(Typography)`
    font-size : 14px;
    font-family : inherit;
    color: #667781;
    font-weight : 400;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity : 0.4;
`;

const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="empty chat image" />
                <Title>Whatsaap Web</Title>
                <SubTitle>Now send recieve messages without keeping your phone online</SubTitle>
                <SubTitle>Use Whatsaap on up to 4 linked devices and 1 phone at the same time</SubTitle>
                <StyledDivider />
            </Container>
            
        </Component>
    )
}

export default EmptyChat;