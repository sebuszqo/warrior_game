import { Router } from "express";

// making a 'warrior' router to handle our warrior ;)
export const warriorRouter = Router();

warriorRouter
    // form to add a new warrior
    .get('/add-form', (req,res)=>{
        res.send("Form to add a new warrior");
    })
    // post to post new warrior
    .post('/', (req, res)=>{
        res.send("Adding new warrior");
    })