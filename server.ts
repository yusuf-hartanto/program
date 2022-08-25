import express, { Express } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './src/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});