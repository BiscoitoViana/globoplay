import React from 'react';
import './MovieItem.css';

function MovieItem({ id, title, thumbnail }){
    return (
        <div className="movie-item">
            <img src={thumbnail} alt={title} />

        </div>
    )
}

export default MovieItem;