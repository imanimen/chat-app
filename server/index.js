const express  = require("express");
const cors     = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("../server/routes/userRoutes")


const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes)

mongoose.connect(process.env.MONGO_URL, () => {
    newUrlParser:true;
    newUnifiedTopology:true;
}).then(() => {
    console.log("DB connection successfull")
}).catch((err) => {
    console.log(err.message)
})

const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`)
})