import {Router} from "express";

// making a 'warrior' router to handle our warrior ;)
export const warriorRouter = Router();

warriorRouter
    // form to add a new warrior
    .get('/add-form', (req, res) => {
        res.render("warrior/add-form");
    })
    // post to post new warrior
    .post('/', (req, res) => {
        console.log(req.body)
        res.render("warrior/warrior-added");
    })