import { useRouter } from "../node_modules/next/router";
import React from "react";
import { useEffect, useState } from "react";



interface IMovie {
    title?: string
    about: string
    director: string
    dateOfRelase: Date
    minutes: number
    videoLink: string
}


const MovieDetails = (movieDetail) => {

    const router = useRouter()
    const name = router?.query?.movie
    console.log("Name", router.query.movie as string);

     
    const url = "https://localhost:44300/Movies/GetMovieName?name="+name;
    const [movieData, setMovieData] = useState<Partial<IMovie>>({});
    async function getMovieByname() {
        const responseString = await fetch("https://localhost:44300/Movies/GetMovieName?name="+ name);
        const response = await responseString.json();
        setMovieData(response);
        console.log("Response:", response);
    }

    useEffect(() => {
        getMovieByname();
    }, [])


    return (
        <>
            <div className="container"  >
                <div className="movie_card" id="bright" >
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src="{{x.moviePicture}}" />
                            <h1>{movieData.title}</h1>
                            <h4> {movieData.director}</h4>
                            <span className="minutes">{movieData.minutes} min</span>
                            <p> Romance  </p>
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

                <div className="yt-trailer-block" >
                    <iframe className="yt-video" width="100%" height="100%"
                        src={movieData.videoLink}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />{" "}
                </div>
            </div>
        </>
    )
}



export default MovieDetails;