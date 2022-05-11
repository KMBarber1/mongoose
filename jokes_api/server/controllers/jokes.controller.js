// OPTION 1
// const Joke = require("./../models/joke.model")

// OPTION 2
const e = require("express")
const { Joke } = require("./../models/jokes.model")


// Get All
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))// successful response
        .catch(err => res.json(err)) // unsuccessful response

}

// Get One
module.exports.oneJoke = (req, res) => {
    const id = req.params.id
    Joke.findOne({ _id: id })
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// Random ????? Don't know how to do this one ?????
module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            console.log(allJokes);
            let randomIndex = Math.floor(Math.random()*allJokes.length);
            let randomJoke = allJokes[randomIndex];
            console.log(randomJoke);
            console.log(randomIndex);

            res.json(randomJoke)
        })
        .catch(err => res.json(err))
}

// Create (same as New):   

// option1
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

// option 2
module.exports.createJoke2 = (req, res) => {
    const createJoke = new Joke(req.body)
    createJoke.save()
    .then(response => res.json(response))
    .catch(err => res.json(err))
}


// Update - getOne + create
module.exports.updateJoke = (req, res) => {
    const id = req.params.id
    Joke.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true }
    )
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

// Delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => res.json(err))
}