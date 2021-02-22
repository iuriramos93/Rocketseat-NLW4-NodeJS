import express, { request } from 'express';

const app = express();

app.listen(9000,() => console.log("Server running!!"));

app.post("/",(request,response) =>{
  
    return response.json({message:"Os dados foram salvo com sucesso!"});
})