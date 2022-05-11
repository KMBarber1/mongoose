// import all dependencies
const express = require("express")
const app = express()

// config mongoose
require("./configs/mongoose.config")

// express config for post
app.use(express.json(), express.urlencoded({ extended: true }));

// Get the routes:

// option 1
// const Routes = require("./routes/joke.routes")
// Routes(app)

// option 2
require("./routes/jokes.routes")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));