import React, { useContext } from 'react';
import MovieItem from '../MovieItem/MovieItem';

import { MoviesContext } from '../../context/MovieContext';

import './MovieList.css';

function MovieList() {
    const [movies, setMovies] = useContext(MoviesContext);
    const {selectedMovie, movieList} = movies;

    const nextMovie = () => {
        if ( selectedMovie >= movieList.length - 1 ) return false;
        setMovies( { ...movies, selectedMovie: selectedMovie + 1 } );
    }

    const prevMovie = () => {
        if ( selectedMovie === 0 ) return false;
        setMovies( { ...movies, selectedMovie: selectedMovie - 1 } );
    }

    return (
        <section className="movie-list__wrapper">
            <div className="movie-list__container">
                <div className="movie-list__track" style={{marginLeft: (selectedMovie * 208) * -1  + 'px'}}>
                    {
                        movieList.map(item => <MovieItem key={item.id} {...item} />)
                    }
                </div>
                <div className="selected-movie"></div>
                <button className="button--arrow-icon button--prev" onClick={prevMovie}>Prev Movie</button>
                <button className="button--arrow-icon button--next" onClick={nextMovie}>Next Movie</button>
            </div>
        </section>
    )
}

export default MovieList;