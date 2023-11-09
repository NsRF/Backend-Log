import express from 'express'
import db from "./configuration/db";
import routes from "./routes";
import cors from 'cors';

const options: cors.CorsOptions = {
    origin: ['http://localhost:4200']
}
const app = express();

app.use(cors(options))

app.use(express.json())

app.use(routes)

db.sync().then(x => console.log(`Banco de dados ${process.env.DB_NAME} conectado com sucesso!`));

app.listen(3333, () => 'Server running on port 3333')
