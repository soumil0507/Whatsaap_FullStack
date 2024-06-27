import { Draw, Height } from '@mui/icons-material';
import {Drawer,  Box, Typography, styled} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

//components
import Profile from './Profile';


const Header = styled(Box)`
    display: flex;
    height : 107px;
    background-color : #008069;
    color : #ffffff;
    & > svg, & > p{
    margin-top: auto;
    padding : 15px;
    font-weight : 600;

    }
`;

const Text = styled(Typography)`
    font-size:  18px;
`;

const Component = styled(Box)`
    background : #ededed;
    height: 90%;
`;

const drawerStyle = {
    left : 20,
    top : 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
    

}



const InfoDrawer = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Drawer
            open = {open}
            onClose = {handleClose}
            PaperProps={{sx:drawerStyle}}
            style = {{zIndex: 1500}}
        >
            <Header>
                <ArrowBack onClick = {handleClose}/>
                <Text >Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer;