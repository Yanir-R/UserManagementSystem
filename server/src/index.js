import express from "express";
import bodyParser  from "body-parser";
import cors from "cors";
import userRoutes from './routes/users.js'
import fs from "fs";
// import { userList } from "./controllers/users.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

const userDataList = fs.readFileSync('C:/Users/l/Desktop/code/React/nodejs-react/server/src/SampleData.txt')



app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Server",
  });
});


app.use('/data', userRoutes)
app.use("/", userRoutes)
app.all("*", (req, res) => {
  res.send("That route doesn't exist")
})



app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
