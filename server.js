import express from 'express';
import dotenv from 'dotenv';
import { data } from './app.js';
dotenv.config()

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(data);
});

app.listen(port, () => console.log(`server is listening on port ${port}.`));