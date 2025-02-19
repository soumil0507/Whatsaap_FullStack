import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { newConversation, getConversation } from '../controller/conversation_controller.js';
import { newMessage, getMessages } from '../controller/message_controller.js';
import { uploadFile } from '../controller/image_controller.js';

import upload from "../utils/upload.js";

const route = express.Router();



route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);



route.post("/file/upload", upload.single("file"), uploadFile);

export default route;