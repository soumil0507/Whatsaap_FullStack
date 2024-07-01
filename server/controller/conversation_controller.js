import { request } from "express";
import Conversation from "../modal/Conversation.js";

export const newConversation = async(request, response) => {
    try{

        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;

        const exists = await Conversation.findOne( {members: { $all: [senderId, recieverId] } } );

        if (exists){
            return response.status(200).json("Conversation already exists");
        }

        const newConversation = new Conversation({
            members : [senderId, recieverId]
        })

        await newConversation.save();
        return response.status(200).json("Conversation Created successfully");

    } catch(e){
        return response.status(500).json(e.message);
    }
}


export const getConversation = async(request, response) => {

    try{
        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;

        let conversation = await Conversation.findOne( {members: { $all: [senderId, recieverId] } } );
        
        return response.status(200).json(conversation);
    }catch(e){
        response.status(500).json(e.message);

    }

};