import React, { useEffect, useState } from "react";
import Link from 'next/link'

const Card = (movie) => {
    console.log("data movies", movie);
    console.log("id", movie.info.id);

    return (
        <>
            <div className="movie">
                <a href={`/${movie.info.id}`}>  <img src={movie.info.moviePicture} className="poster"></img> </a>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.rating}</p>
                    </div>
                    <div className="overview">
                        <h1>Overview</h1>
                        {movie.info.about}
                         <p>n</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
