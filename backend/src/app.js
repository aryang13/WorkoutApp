import express from 'express';
import * as dotenv from "dotenv";
import cors from cors;

dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

app.get('/ping', (req, res) => {
    console.log("pong");
})