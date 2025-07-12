const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./roure')
const cors = require('cors')
require('dotenv').config()
let URL = process.env.DB_URL

mongoose.connect(URL).then(dat=>{
    console.log("data base is connected")
})


const corsOptions = {
    origin: '*',
    Credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
app.use("/api", route);

app.listen(process.env.PORT, () => {
    console.log(`Server connected on port ${process.env.PORT}`);
});


module.exports = app