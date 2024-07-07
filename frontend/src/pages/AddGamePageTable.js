import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddGamePageTable = () => {

    const [name, setName]  = useState('');
    const [releaseDate, setReleaseDate]  = useState('');
    const [size, setSize] = useState('');
    
    const redirect = useNavigate();

    const addGame = async () => {
        const newGame = { name, releaseDate, size };
        const response = await fetch('/games', {
            method: 'post',
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Your game has been added!`);
        } else {
            alert(`There was an unexpected error when trying to add the game. Status code = ${response.status}`);
        }
        redirect("/games");
    };


    return (
        <>
        <article>
            <h2>Add a game</h2>
            <p>Add a game to the database.</p>
            
            <table id="games">
                <caption>Input the information below.</caption>
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
                            placeholder="Title of the game"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>
                    <td>
                        <input
                            type="date"
                            value={releaseDate}
                            placeholder="Release date of the game"
                            onChange={e => setReleaseDate(e.target.value)} 
                            id="releaseDate" />
                    </td>

                    <td>
                        <input
                            type="number"
                            placeholder="Size of the game"
                            value={size}
                            onChange={e => setSize(e.target.value)} 
                            id="size" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addGame}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddGamePageTable;