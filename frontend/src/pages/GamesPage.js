import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GameList from '../components/GameList';
import { Link } from 'react-router-dom';
import {FaFolderPlus} from 'react-icons/fa';
import { IoGameController } from "react-icons/io5";


function GamesPage({ setGame }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [games, setGames] = useState([]);

    // RETRIEVE the entire list of games
    const loadGames = async () => {
        const response = await fetch('/games');
        const games = await response.json();
        setGames(games);
    } 
    

    // UPDATE a single game
    const onEditGame = async game => {
        setGame(game);
        redirect("/edit");
    }


    // DELETE a single game  
    const onDeleteGame = async _id => {
        const response = await fetch(`/games/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/games');
            const games = await getResponse.json();
            setGames(games);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the games
    useEffect(() => {
        loadGames();
    }, []);

    // DISPLAY the games
    return (
        <>
            <h2><IoGameController/> List of Games</h2>
            <p>Use this page to view, edit and delete games in the table below.</p>
            
            <Link to="/create"><FaFolderPlus></FaFolderPlus> Add Game</Link>
            <GameList 
                games={games} 
                onEdit={onEditGame} 
                onDelete={onDeleteGame} 
            />
        </>
    );
}

export default GamesPage;