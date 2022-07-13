import React, { useEffect, useState } from "react";

const Card = (movie) => {
    console.log("data movies", movie);
    console.log("id", movie.info.id);

    return (
        <>
         <a href={`/${movie.info.title}`}> 
          <div className="movie" >
                <img src={movie.info.moviePicture} className="poster"></img> 
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.rating}</p>
                    </div>
                    <div className="overview">
                        <h1>Overview</h1>
                        {movie.info.about}

                    </div>
                </div>
            </div>
            </a>
        </>
    )
}

export default Card;