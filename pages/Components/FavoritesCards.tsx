
import React from "react";
import axios from "../../node_modules/axios/index";
import Link from "../../node_modules/next/link";


async function deleteFromFavorites(id: Number) {
    console.log("Id Favorites:", id);
    axios.delete("https://localhost:44300/Favorites/Delete?idS=" + id)
        .then(response => {
            if (response.data == true) {
                alert("Deleted from favorites successfuly!");
                window.location.reload();
            }
            else
                alert("Error!")
        });
};

const Card = (movie: any) => {
    return (
        <>
            <div className="card" >
                <div className="left">
                    <img className="picture" width={300} height={300} src={movie.movie.moviePicture} /*style="width:100%"*/ />
                </div>
                <div className="right">
                    <h1>{movie.movie.title}</h1>
                    <p className="title">{movie.movie.title}</p>
                    <p>{movie.movie.minutes}</p>
                    <Link href={`/movies/${movie.movie.movieName}`}>
                        <p>{movie.movie.rating}</p>
                    </Link>
                    <p><button className="favbutton" onClick={() => deleteFromFavorites(movie.movie.id)}>Delete from favorites</button></p>

                </div>
            </div>

        </>
    )
}

export default Card;