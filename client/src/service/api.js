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