import { Router } from "express";

// making a 'hallOfFameRouter' router to handle our warrior ;)
export const hallOfFameRouter = Router();

hallOfFameRouter
    // getting the best warriors
    .get('/', (req,res)=>{
        res.send("List of all best warriors");
    })
