// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import products from './data/products'
import TopicsPage from './pages/TopicsPage';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import GamesPage from './pages/GamesPage';
import StaffPage from './pages/StaffPage'

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddGamePageTable from './pages/AddGamePageTable';
import EditGamePageTable from './pages/EditGamePageTable';

import GalleryPage from './pages/GalleryPage';

// Define the function that renders the content in Routes, using State.
function App() {

  const [game, setGameToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Portfolio Website</h1>
            <p>A Website to Demonstrate Various Web Technologies, by Benjamin Premi-Reiller</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<GamesPage setGame={setGameToEdit} />} />              
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/create" element={<AddGamePageTable />} />
                    <Route path="/edit" element={<EditGamePageTable gameToEdit={game} />} />
                    <Route path="/gallery" element={<GalleryPage />} /> 
                    <Route path="/order" element={<OrderPage/>} />
                    <Route path="/staff" element={<StaffPage/>} />
                    {/*
                     <Route path="/update" element={<EditMoviePageForm movieToEdit={movie} />} />
                     */}
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Benjamin Premi-Reiller</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;