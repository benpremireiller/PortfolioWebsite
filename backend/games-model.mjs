// Models for the Game Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unique and specific error message.' });
    } else  {
        console.log('Success: Unique and specific success message.');
    }
});

// SCHEMA: Define the collection's schema.
const gameSchema = mongoose.Schema({
	name:    { type: String, required: true },
	releaseDate:     { type: Date, required: true, default: Date.now },
	size: { type: Number}
});

// Compile the model from the schema 
// by defining the collection name "Games".
const Games = mongoose.model('Games', gameSchema);


// CREATE model *****************************************
const createGame = async (name, releaseDate, size) => {
    const game = new Games({ 
        name: name, 
        releaseDate: releaseDate, 
        size: size
    });
    return game.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveGames = async () => {
    const query = Games.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGameByID = async (_id) => {
    const query = Games.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGameById = async (_id) => {
    const result = await Games.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGame = async (_id, name, releaseDate, size) => {
    const result = await Games.replaceOne({_id: _id }, {
        name: name, 
        releaseDate: releaseDate, 
        size: size
    }, {runValidators: true});
    return { 
        _id: _id, 
        name: name, 
        releaseDate: releaseDate, 
        size: size
    }
}

// EXPORT the variables for use in the controller file.
export { createGame, retrieveGames, retrieveGameByID, updateGame, deleteGameById }