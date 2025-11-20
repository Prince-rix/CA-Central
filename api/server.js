const express = require("express");
const app = express();
require("dotenv").config();


const Port = process.env.PORT 
const { connectionDb } = require("./config/dbconnection");
const router = require("./routes/router");
const cors = require("cors");

//For local
// app.use(cors({ origin: "http://localhost:3001" }));

//Prod
app.use(cors());

app.use("/api/webhook", express.raw({ type: "application/json" }));
app.use(express.json());
app.use("/api",router)




app.use((err, req, res, next) => {
    console.error(err); // log full error
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});


connectionDb();

//for Local

// app.listen(Port,()=>{
//     console.log(`Running on Port ${Port}`)
// })

//For Prod
app.listen(Port, "0.0.0.0", () => {
    console.log(`Server running on port ${Port}`);
});