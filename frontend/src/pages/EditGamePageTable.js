import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditGamePageTable = ({ gameToEdit }) => {
 
    const [name, setName]  = useState(gameToEdit.name);
    const [releaseDate, setReleaseDate]  = useState(gameToEdit.releaseDate.slice(0,10));
    const [size, setSize] = useState(gameToEdit.size);
    
    const redirect = useNavigate();

    const editGame = async () => {
        const response = await fetch(`/games/${gameToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                releaseDate: releaseDate, 
                size: size
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The game was successfully edited!`);
        } else {
            const errMessage = await response.json();
            alert(`There was an unexpected error when editing the game. Status code: ${response.status}. Error message: ${errMessage.Error}`);
        }
        redirect("/games");
    }

    return (
        <>
        <article>
            <h2>Edit a game.</h2>
            <p>Use this page to edit a game already available in the database.</p>
            <table id="games">
                <caption></caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Release Date</th>
                        <th>Size (MB)</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            defaultValue={gameToEdit.name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>
                    <td>
                        <input
                            type="date"
                            defaultValue={gameToEdit.releaseDate.slice(0,10)}
                            onChange={e => setReleaseDate(e.target.value)} 
                            id="releaseDate" />
                    </td>
                    <td>
                        <input
                            type="number"
                            defaultValue={gameToEdit.size}
                            onChange={e => setSize(e.target.value)} 
                            id="size" />
                    </td>
                    <td>
                        <button
                            type="submit"
                            onClick={editGame}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditGamePageTable;