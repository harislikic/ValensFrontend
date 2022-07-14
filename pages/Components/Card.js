import React, { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import axios from 'axios'


async function addToFavorite( id )
{
    axios.post("https://localhost:44300/Favorites/Add/" + id)
    .then(response => {
        if (response.data == true) {
            alert("Add to favorites successfuly!");
            window.location.reload();
        }
        else
            alert("Error!")
    });
}




const Card = (movie) => {
    console.log("data movies", movie);
    console.log("id", movie.info.id);


    return (
        <>
            <Link href={`/${movie.info.title}`}>
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
                    <button  onClick={() => addToFavorite(movie.info.id)} >Add to favorite</button>
                </div>
               
            </Link>
        </>
    )
}

export default Card;