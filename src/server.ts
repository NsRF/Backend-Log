import express from 'express'

import { Router, Request, Response } from 'express';
import db from "./configuration/db";

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

app.use(route)

db.sync().then(x => console.log(`Banco de dados ${process.env.DB_NAME} conectado com sucesso!`));

app.listen(3333, () => 'Server running on port 3333')