import React, { useContext} from 'react';
import './MovieDetail.css';
import MainLogo from '../../assets/images/main-logo.svg';

import { MoviesContext } from '../../context/MovieContext';

function MovieDetail(){
    const [{selectedMovie, movieList}] = useContext(MoviesContext);
    const { title, description, detailPhoto } = movieList[selectedMovie];
    return (
        <div className="movie-detail" style={{backgroundImage:`url(${detailPhoto})`}}>
            <h1 className="main-logo">
                <img src={MainLogo} alt="Globoplay" />
            </h1>
            <div className="movie-detail__text">
                <h2 className="movie-detail__title">{title}</h2>
                <p className="movie-detail__description">{description}</p>
                <div className="movie-detail__buttons">
                    <button className="movie-detail__button"><i className="icon-play"></i>Assista</button>
                    <button className="movie-detail__button">Veja mais</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;