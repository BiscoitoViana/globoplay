import React, { useContext, forwardRef, useImperativeHandle, useState } from 'react';
import { keys } from '../../keys';

import { MoviesContext } from '../../context/MovieContext';

import './MovieDetail.css';
import MainLogo from '../../assets/images/main-logo.svg';

const MovieDetail = forwardRef((props, ref) => {
    const [{selectedMovie, movieList}] = useContext(MoviesContext);
    const { title, description, detailPhoto } = movieList[selectedMovie];

    const [activeButton, setActiveButton] = useState(0);

    useImperativeHandle(ref, () => ({
        handleKeyPress(e) {
            switch(e.keyCode){
                case keys.KEY_RIGHT:
                    nextButton();
                break;
                case keys.KEY_LEFT:
                    prevButton()
                break;
                case keys.KEY_DOWN:
                    props.setFocus('MOVIE_LIST');
                break;
                default:
                break;
            }   
        }
    }));

    const nextButton = () => {
        if(activeButton === 1) return false;
        setActiveButton(currentButton => currentButton + 1)
    }
    const prevButton = () => {
        if(activeButton === 0){
            props.setFocus('SIDE_BAR');
        } else {
            setActiveButton(currentButton => currentButton - 1)
        }
    }

    return (
        <div className={`movie-detail${props.focusedBlock === 'MOVIE_DETAIL' ? ' active-block' : ''}`} style={{backgroundImage:`url(${detailPhoto})`}}>
            <h1 className="main-logo">
                <img src={MainLogo} alt="Globoplay" />
            </h1>
            <div className="movie-detail__text">
                <h2 className="movie-detail__title">{title}</h2>
                <p className="movie-detail__description">{description}</p>
                <div className="movie-detail__buttons">
                    <button className={`movie-detail__button${activeButton === 0 ? ' active-button' : ''}`}><i className="icon-play"></i>Assista</button>
                    <button className={`movie-detail__button${activeButton === 1 ? ' active-button' : ''}`}>Veja mais</button>
                </div>
            </div>
        </div>
    )
});

export default MovieDetail;