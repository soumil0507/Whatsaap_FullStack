import { Box, Dialog, styled } from "@mui/material"

//components
import { useContext } from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width:450px;
`;


const RightComponent = styled(Box)`
    width:73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`;

const dialogStyle = {
    height:"95%",
    margin:"20px",
    borderRadius:"0",
    width:"100%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden"

}

const ChatDialog = () => {

    const {person} = useContext(AccountContext);

    return <Dialog
        open={true}
        PaperProps={{sx : dialogStyle}}
        hideBackdrop={true}
        maxWidth={'mid'}
    >
        <Component>
            <LeftComponent>
                <Menu>
                </Menu>
            </LeftComponent>
            <RightComponent>
                {Object.keys(person).length > 0 ? <ChatBox /> : <EmptyChat />}
            </RightComponent>
        </Component>
    </Dialog>
}

export default ChatDialog