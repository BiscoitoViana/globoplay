import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';

import { MoviesProvider } from './context/MovieContext';

import './assets/styles/fonts.css';
import './assets/styles/default.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <main>
                <MoviesProvider>
                    <MovieDetail />
                    <MovieList />
                </MoviesProvider>
            </main>
        </div>
    );
}

export default App;
