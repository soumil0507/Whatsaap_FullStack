import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsaap.nypabno.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsaap`;
const Connection = async () => {
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log("Database connection is established successfully");
    }catch(e){
        console.log("Database connection is not established ", e.message);
    }
}

export default Connection;