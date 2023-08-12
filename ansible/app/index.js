const express = require("express");
const app = express();

const port = 3001;

app.get("/", (_, res) => res.send("Hello Douglas Full Cycle"));

app.listen(port, () => console.log("App running at:" + port));
