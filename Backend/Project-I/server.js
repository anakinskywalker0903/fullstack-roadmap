const app =  require("./src/App");
const connectDB = require("../Project-I/db/db")


connectDB();


app.listen(3000,() => {
    console.log("Server is running on port 3000")
})