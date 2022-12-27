import {createPool} from "mysql2/promise";

export const db = createPool({
    host: 'localhost',
    user: 'root',
    database: 'Warrior-Arena',
    namedPlaceholders: true,
    decimalNumbers: true,
});