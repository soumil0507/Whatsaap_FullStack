

//components

import { Box } from "@mui/material";
import Header from "./Header";
import Search from "./Search";
import Conversation from "./Conversations";

const Menu = () => {
    return (

        <Box>
            <Header></Header>
            <Search></Search>
            <Conversation></Conversation>
        </Box>
    )
}

export default Menu;