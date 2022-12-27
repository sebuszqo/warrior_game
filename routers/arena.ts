import { Router } from "express";

// making a 'arena' router
export const arenaRouter = Router();

arenaRouter
    // form to make a fight
    .get('/fight-form', (req,res)=>{
        res.render("arena/fight-form");
    })
    // post to start a fight
    .post('/fight', (req, res)=>{
        res.send("arena/fight");
    })

