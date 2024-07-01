import { useEffect, useState } from "react";

import { Box, styled,InputBase } from "@mui/material";
import {EmojiEmotionsOutlined, AttachFileOutlined, Mic} from '@mui/icons-material';

import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
    height:55px;
    background-color:#ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {

        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius:18px;
    width: calc(96% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`;

const ClipIcon = styled(AttachFileOutlined)`
    transform: rotate(40deg);
`;


const Footer = ({sendText, setValue, value, file, setFile}) => {
    
    useEffect(() => {
        const getImage = async() => {
            if (file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                await uploadFile(data);
            }
        }
        getImage();
    },[file]);

    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0])
        setValue(e.target.files[0].name)
    };

    return (
        <Container>
            <EmojiEmotionsOutlined />
            
            <label htmlFor="fileInput">
            <ClipIcon 
                onClick={()=>{}}
            />
            <input 
                id="fileInput"
                type="file" 
                style={{display:'none'}}
                onChange={(e) => onFileChange(e)}
            />
            </label>
            <Search>
                <InputField 
                    placeholder="Type a message"
                    onChange={(e)=>setValue(e.target.value)}
                    onKeyDown={(e)=>sendText(e)}
                    value = {value}
                />
            </Search>
            
            <Mic />

        </Container>
    )
}

export default Footer;