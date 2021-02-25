import request from 'supertest';
import { app } from '../app';

import createConnection from '../database'

describe("User",() => {
    beforeAll( async ()=>{
        const connection = await createConnection();
        await connection.runMigrations();
    });
  
    it("Should be able to create a new user",async () =>{
        
   const response = await request(app).post("/users").send(
    {
        email:"example@ex.com",
        name:"Example"
    }
);
expect(response.status).toBe(201);
   });
});