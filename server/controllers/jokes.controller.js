const Joke = require("./../models/jokes.model")

module.exports.testApi = (req, res)=>{
    res.json({Status: "ok"})
}

// GET ALL
module.exports.allJokes = (req, res)=>{
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

// GET ONE
module.exports.oneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
}

// CREATE
module.exports.addJoke = (req, res)=>{
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// UPDATE
module.exports.updateJoke = (req, res)=>{
    const idParams = req.params.id
    const updateValue = req.body
    Joke.findOneAndUpdate(
        {_id : req.params.id},
        updateValue,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
}

// DELETE
module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(message =>res.json(message))
        .catch(err =>res.json(err))
}