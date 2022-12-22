import { Router } from "express";

// making a 'arena' router
export const arenaRouter = Router();

arenaRouter
    // form to make a fight
    .get('/fight-form', (req,res)=>{
        res.send("Form to make a fight");
    })
    // post to start a fight
    .post('/fight', (req, res)=>{
        res.send("Making a fight");
    })

