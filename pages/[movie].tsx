import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import CardDetails from "./Components/CardDetails";


interface IMovie {
    title?: string
    about: string
    director:string
    dateOfRelase:Date
    minutes:number
    videoLink:string
}


const MovieDetails = (movieDetail) => {

    const router = useRouter()
    const id = router?.query?.movie
    console.log('x',id)
    const newurl =`https://localhost:44300/Movies/GetMovieid?id=${id}` ;
 
    const [movieData, setMovieData] = useState<Partial<IMovie>>({});
    async function getMovieById() {
        const responseString = await fetch(newurl);
        const response = await responseString.json();
        setMovieData(response);
    }

    useEffect(() => {
        getMovieById();
    }, [])


    return (
        <>
            <div className="container"  >
                <div className="movie_card" id="bright" >
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src="{{x.moviePicture}}" />
                            <h1>{movieData.title}</h1>
                            <h4> {movieData.director} {movieData.dateOfRelase}</h4>
                            <span className="minutes">{movieData.minutes} min</span>
                            <p> Romance</p>
                        </div>
                        <div className="movie_desc">
                            <p className="text">
                                {movieData.about}
                            </p>
                        </div>
                        
                        <div className="buton-div">
                            <a className="btn" href="{x.torentLink}" rel="nofollow"><i className="fa fa-download"></i>Download </a>

                        </div>
                    </div>

                    <div className="blur_back bright_back"></div>
                </div>

                <div  className="yt-trailer-block" >
                    <iframe className="yt-video"  width="100%" height="100%" 
                        src={movieData.videoLink}
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />{" "}
                </div>
            </div>
        </>
    )
}



export default MovieDetails;