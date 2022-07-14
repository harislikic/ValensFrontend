
import { useEffect, useState } from "react";
import Link from "../node_modules/next/link";
import  FavoriteCards from "./Components/FavoritesCards";

export default function Home() {
    const [movieData, setMovieData] = useState([]);

    async function getMovies() {
        const responseS = await fetch("https://localhost:44300/Favorites/Get");
        const response = await responseS.json();
        setMovieData(response);
    }

    console.log("aaaa", movieData);

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <>
            <div className="column">
                <div className="header">
                 
                    <div className="header-right">
                        <Link href="/">Home</Link>
                    </div>
                </div>
                <div className="all">
                    <div className="moviesCategory">
                        {
                            (movieData.length === 0) ? <p className="notfound"><h1 style={{color:"red",display:"flex"}}>You dont have any favorie movie</h1></p> : movieData.map((res: any) => {
                                console.log('-----', movieData.length)
                                return (
                                    <FavoriteCards movie={res.movie} />
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </>
    )

}