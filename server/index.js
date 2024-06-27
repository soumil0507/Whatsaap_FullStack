import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';


//components
import Connection from './database/db.js';
import Route from './routes/route.js';

const PORT = 8000;
const app = express();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route)


Connection();


app.listen(PORT, ()=>{
    console.log(`Server is running in port ${PORT}`);
});