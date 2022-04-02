import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

mongoose.connect(
  process.env.DATABASE_URI, 
  {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

app.get('/ping', (req, res) => {
    console.log("pong");
})