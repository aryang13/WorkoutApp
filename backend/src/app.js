import express from 'express';
import * as dotenv from "dotenv";
import cors from 'cors';
import { workoutRouter } from './routes/workout';
import { loginRouter } from './routes/login';
import mongoUtil from './db/mongoUtil';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())

mongoUtil.connectToDatabase( function( err, client ) {
  if (err) console.log(err);
  else console.log("Connected to Database");
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

app.use('/login', loginRouter);
app.use('/workout', workoutRouter);

app.get('/ping', (req, res) => {
  console.log("pong");
  res.status(200).send("pong");
});