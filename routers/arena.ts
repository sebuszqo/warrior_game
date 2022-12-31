import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";
import {ValidationError} from "../utils/errors";

// making a 'arena' router
export const arenaRouter = Router();

arenaRouter
    // form to make a fight
    .get('/fight-form', async (req, res) => {
        const warriors = await WarriorRecord.listAll();
        res.render("arena/fight-form", {
            warriors
        });
    })
    // post to start a fight
    .post('/fight', async (req, res) => {
        const {warrior1: warrior1Id, warrior2: warrior2Id} = req.body
        const warrior1 = await WarriorRecord.getOneWarrior(warrior1Id);
        const warrior2 = await WarriorRecord.getOneWarrior(warrior2Id);
        // making validations !
        if (warrior1Id === warrior2Id) {
            throw new ValidationError("You have chosen the same warrior for the fight, he cannot fight himself!")
        }
        if (!warrior1 || !warrior2) {
            throw new ValidationError("We couldn't find opponent for fight, try again ")
        }

        res.render("arena/fight");
    })

