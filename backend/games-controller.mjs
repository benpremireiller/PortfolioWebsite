// Controllers for the Game Collection

import 'dotenv/config';
import express from 'express';
import * as games from './games-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/games', (req,res) => { 
    games.createGame(
        req.body.name, 
        req.body.releaseDate, 
        req.body.size
        )
        .then(game => {
            console.log(`"${game.title}" was added to the collection.`);
            res.status(201).json(game);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Could not create game in collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/games', (req, res) => {
    games.retrieveGames()
        .then(games => { 
            if (games !== null) {
                console.log(`All games were retrieved from the collection.`);
                res.json(games);
            } else {
                res.status(404).json({ Error: 'Not found. Could not locate the requested games.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Could not retrieve games due an error in the retrieveGames function.' });
        });
});


// RETRIEVE by ID controller
app.get('/games/:_id', (req, res) => {
    games.retrieveGameByID(req.params._id)
    .then(game => { 
        if (game !== null) {
            console.log(`"${game.title}" was retrieved, based on its ID.`);
            res.json(game);
        } else {
            res.status(404).json({ Error: `Not found. Game with ID ${req.params._id} does not exist in collection.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Could not retrieve games due an error in the retrieveGameByID function.' });
    });

});

// UPDATE controller ************************************
app.put('/games/:_id', (req, res) => {
    games.updateGame(
        req.params._id, 
        req.body.name, 
        req.body.releaseDate, 
        req.body.size
    )
    .then(game => {
        console.log(`"${game.title}" was updated.`);
        res.json(game);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Could not update game due an error in the updateGame function.' });
    });
});


// DELETE Controller ******************************
app.delete('/games/:_id', (req, res) => {
    games.deleteGameById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} game was deleted.`);
                res.status(200).send({ Success: `Game with id "${req.params._id}" was deleted.`});
            } else {
                res.status(404).json({ Error: `Could not delete game with id ${req.params._id} because it does not exist.` });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Could not update game due an error in the deleteGameByID function.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});