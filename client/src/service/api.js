import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async(data) => {

    try{
        let response = await axios.post(`${url}/add`, data);
    }catch(e){
        console.log("Error while calling addUser API - ", e);
    }

}

export const getUsers = async() => {
    try{
        let response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data;
    }catch(e){
        console.log("Error while getUsers API - ", e.message);
    }
}


export const setConversation = async(data) =>{
    try{
        await axios.post(`${url}/conversation/add`, data);
    }catch(e){
        console.log("Error while setting conversation api", e.message);
    }
}

export const getConversation = async(data) => {
    try{
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    }catch(e){
        console.log("Error while getting conversation api", e.message);
    }
}

export const newMessage = async(data) => {
    try{
        await axios.post(`${url}/message/add`, data);
    }
    catch(e){
        console.log("error while calling new message api", e.message);
    }
}

export const getMessages = async(id) => {
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    }catch(e){
        console.log("error while calling get message api", e.message);
    }
}

export const uploadFile = async(data) => {

    try{
        await axios.post(`${url}/file/upload`, data);

    }catch(e){
        console.log("error while calling upload file api", e.message);
    }

};