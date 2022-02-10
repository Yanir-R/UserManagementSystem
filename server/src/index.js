import express from "express";
import bodyParser  from "body-parser";
import cors from "cors";
import userRoutes from './routes/users.js'

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Server",
  });
});

app.use("/", userRoutes)
app.all("*", (req, res) => {
  res.send("That route doesn't exist")
})



app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
