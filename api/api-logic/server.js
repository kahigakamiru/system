require('dotenv').config()
const express = require("express")
const app = express();
const cors = require("cors");
const config = require("./config");

//Import Routes
const {logicProjects} = require("./routes/projects");
const {logicTasks} = require('./routes/tasks');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Routes
app.use("/api/projects", logicProjects);
app.use("/api/tasks", logicTasks);

app.get('/', (req, res) => {
    res.send({ status: "Ok", message: "Welcome" });
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on localhost ${PORT}`))