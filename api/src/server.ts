import 'reflect-metadata'
import express from "express";
import "./database";
import { router } from './routes';

const app = express();

app.listen(9000,() => console.log("Server running!!"));

app.use(express.json());
app.use(router)