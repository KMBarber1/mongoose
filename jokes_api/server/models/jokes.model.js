const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true, "Setup is required"],
        minlength: [5, "A Joke setup must be at least 5 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is requiered"],
        minlength: [3, "A Joke punchline must be at least 3 characters long"]        
    },

}, {timestamps : true})


// OPTION 1
// const Joke = mongoose.model('Joke', JokeSchema)
// module.exports = Joke

// OPTION 2
module.exports.Joke = mongoose.model('Joke', JokeSchema)