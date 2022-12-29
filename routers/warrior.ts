import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";
import {ValidationError} from "../utils/errors";

// making a 'warrior' router to handle our warrior ;)
export const warriorRouter = Router();

warriorRouter
    // form to add a new warrior
    .get('/add-form', (req, res) => {
        res.render("warrior/add-form");
    })
    // post to post new warrior
    .post('/', async (req, res) => {

        if (await WarriorRecord.isNameTaken(req.body.name)) {
            throw new ValidationError(`Name ${req.body.name} has already been taken taken, choose different one`)
        }
        const warrior = new WarriorRecord({
            ...req.body,
            power: Number(req.body.power),
            defence: Number(req.body.defence),
            stamina: Number(req.body.stamina),
            agility: Number(req.body.agility)
        })
        await warrior.insert()
        console.log(warrior)
        res.render("warrior/warrior-added");
    })