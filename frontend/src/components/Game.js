import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.



function Game({ game, onEdit, onDelete }) {

    return (
        <tr>
            <td>{game.name}</td>
            <td>{game.releaseDate.slice(0,10)}</td>
            <td>{game.size}</td>

            {/* Update these icons to something that matches your style. */}
            <td><FaTrash onClick={() => onDelete(game._id)} /></td>
            <td><FaEdit onClick={() => onEdit(game)} /></td>
        </tr>
    );
}

export default Game;