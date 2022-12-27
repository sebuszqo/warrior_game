import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";

export class WarriorRecord{
    public id?: string;
    /**
     * Name is always unique.
     */
    public readonly name: string;
    public readonly power: number;
    public readonly defence: number;
    public readonly stamina: number;
    public readonly agility: number;
    public readonly wins? : number;
    /**
     * giving constructor a object and Interface as his own class implementation.
     * new WarriorRecord("name", "power", "defence", "stamina", "agility", "wins")
     */
    constructor(obj:WarriorRecord ) {
        const {id, name, power, stamina, defence, agility, wins} = obj;
        /**
         * summing all warrior properties cuz our sum of properties should be 10!
         * Throwing ValidationError if there isn't sum of 10
         */
        const sum = [power, stamina, defence, agility, wins].reduce((prev,curr) => prev + curr,0);

        if (sum !== 10){
            throw new ValidationError(`Sum of warrior properties have to count 10! Currently your sum is: ${sum}`)
        }

        /**
         * Validation of name length, name should count from 3 to 50 characters.
         */
        if (name.length < 3 || name.length > 50){
            throw new ValidationError(`Name should count from 3 to 50 characters. Currently your counts: ${name.length}`)
        }

        this.id = id;
        this.name = name;
        this.power = power;
        this.defence = defence;
        this.stamina = stamina;
        this.agility = agility;
        this.wins = wins;
    }

    /**
     * Inserting new warrior to database
     */
    async insert(): Promise<string>{
        if (!this.id){
            this.id = uuid();
        }

        "INSERT INTO"
        return
    }

    /**
     * Updating counter of wins after warrior win
     */
    async updateWins(): Promise<void> {

    }

    /**
     * Getting One Warrior with id that we are searching
     * @param id
     */
    static async getOneWarrior(id:string): Promise<WarriorRecord | null>{
        return
    }

    /**
     * Listing all of our Warriors
     */
    static async listAll(): Promise<WarriorRecord[]>{

        return
    }

    /**
     * Listing only number of the best warriors that we want to display
     * @param topCount
     */
    static async listTopWarriors(topCount: number): Promise<WarriorRecord[]>{
        return
    }
}