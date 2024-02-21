import express from "express";
import connectDB from './config/db.js';
import router from "./routes/api/entrenadores.js";
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/entrenadores", router);

connectDB(); //*Connects Database

app.get('/', (req, res) => res.send('Hello MERN Stack<<'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server Running on port ${port}`))
