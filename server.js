import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./model/videosSchema.js";

//app config
const app = express();
const port = 9000;

//middleware
app.use(express.json());

//DB config
const connection_url =
  "mongodb://tiktokdb:jIZzvCMPzfxJEUsAwQutoJC4c4dRoTPxqUSQvD7KJXRj2sLVA9luT9P4iwMrzKe9yyGbBrQSeSxp1dXSrCBnhw%3D%3D@tiktokdb.mongo.cosmos.azure.com:10255/tiktokDB?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@tiktokdb@";

mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log("Error connecting to cosmosDB");
    else console.log("connection established to cosmos");
  }
);

//api endpoint
app.get("/", (req, res) => res.status(200).send("Hi"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.post("/v2/posts", (req, res) => {
  const dbPost = req.body;

  Videos.create(dbPost, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
