const JokeController = require('../controllers/jokes.controller')

module.exports = app =>{
    // Returns a list of all jokes
    app.get("/api/jokes", JokeController.allJokes) 
    
    // Returns a random joke
    app.get("/api/jokes/random", JokeController.randomJoke) 
    // ????? Don't know how to do this one ?????

    // Returns the joke with matching "_id"
    app.get("/api/jokes/:id", JokeController.oneJoke)

    // Returns a random joke
    // /app.get("api/jokes/random", JokeController.randomJoke) 
    // ????? Don't know how to do this one ?????
    
    // Creates a new joke
    // option 1:
    // app.post("api/jokes/new", JokeController.createJoke)
    // option 2:
    app.post("/api/jokes", JokeController.createJoke)

    // Updates the joke with matching "_id"
    app.put("/api/jokes/:id", JokeController.updateJoke)

    // Removes the joke with matching "_id"
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}