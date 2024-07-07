import React from 'react';
import Game from './Game';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function GameList({ games, onDelete, onEdit }) {
    return (
        <table id="games">
            <caption>Add, Remove and Edit Games</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Release Date</th>
                    <th>Size (MB)</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, i) => 
                    <Game 
                        game={game} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default GameList;
