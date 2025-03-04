const express = require("express");
const app = express();
const queryFile = require("./service"); 

app.use(express.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

let port = 7070;
app.listen(port, () => console.log(`Server running on port ${port}`)); 

// API Route
app.post("/fetchAllchats", async (req, res) => {
  try {
    console.log(" API Called: /fetchAllchats"); 
    await queryFile.fetchAllChats(req, res);
  } catch (error) {
    console.error("Error in /fetchAllchats:", error);
    res.status(500).send({ message: "Server error" });
  }
});
