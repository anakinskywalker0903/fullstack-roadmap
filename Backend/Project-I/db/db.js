const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("url")

    console.log("Connected to DB")

}


module.exports = connectDB;