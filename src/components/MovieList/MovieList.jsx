import React, { useContext, forwardRef, useImperativeHandle } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { keys } from '../../keys';

import { MoviesContext } from '../../context/MovieContext';

import './MovieList.css';

const MovieList = forwardRef((props, ref) => {
    const [movies, setMovies] = useContext(MoviesContext);
    const {selectedMovie, movieList} = movies;

    useImperativeHandle(ref, () => ({
        handleKeyPress(e) {
            switch(e.keyCode){
                case keys.KEY_UP:
                    props.setFocus('MOVIE_DETAIL')
                break;
                case keys.KEY_RIGHT:
                    nextMovie();
                break;
                case keys.KEY_LEFT:
                    prevMovie();
                break;
                default:
                break;
            }   
        }
    }));

    const nextMovie = () => {
        if ( selectedMovie >= movieList.length - 1 ) return false;
        setMovies( { ...movies, selectedMovie: selectedMovie + 1 } );
    }

    const prevMovie = () => {
        if ( selectedMovie === 0 ){
            props.setFocus('SIDE_BAR');
        } else {
            setMovies( { ...movies, selectedMovie: selectedMovie - 1 } );
        }
    }


    return (
        <section className={props.focusedBlock === 'MOVIE_LIST' ? 'movie-list__wrapper active-block' : 'movie-list__wrapper'}>
            <div className="movie-list__container">
                <div className="movie-list__track" style={{marginLeft: (selectedMovie * 208) * -1  + 'px'}}>
                    {
                        movieList.map(item => <MovieItem key={item.id} {...item} />)
                    }
                </div>
                <div className="selected-movie"></div>
                {/* <button className="button--arrow-icon button--prev" onClick={prevMovie}>Prev Movie</button>
                <button className="button--arrow-icon button--next" onClick={nextMovie}>Next Movie</button> */}
            </div>
        </section>
    )
})

export default MovieList;