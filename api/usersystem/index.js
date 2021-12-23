require('dotenv').config()
const express = require("express")
const app = express();
const cors = require("cors");
const config = require("./config");

//Import Routes
const authRoute = require("./routes")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Routes
app.use("/api/auth", authRoute);

app.get('/', (req, res) => {
    res.send({ status: "Ok", message: "Welcome" });
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on localhost ${PORT}`))