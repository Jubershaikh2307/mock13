const express = require('express');
const cors = require('cors');
const connection = require("./config/db");
const { User } = require('./Routes/user.routes');
const { Job } = require('./Routes/job.routes');

const port = 3001
const app = express()

app.use(express.json())

app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Welcome toi Server")
})

app.use("/job",Job)

app.use("/user",User)

app.listen(port, async () => {
    try {
        await connection
        console.log("Connected To database");
        console.log("Hold ctrl and then click to URL http://localhost:"+port);
    } catch (err) {
        console.log("There is some errot :" + err);
    }
})