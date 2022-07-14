import { useRouter } from "../node_modules/next/router";
import React from "react";
import { useEffect, useState } from "react";
import axios from "../node_modules/axios/index";


interface IMovie {
    title: string,
    about: string,
    director: string,
    dateOfRelase: Date,
    minutes: number,
    videoLink: string,
}


function MovieDetails() {

   
    const router = useRouter()
    const { pid } = router.query
    console.log("Name", {pid});



    const [movieData, setMovieData] = useState([]);


    useEffect(() => {
        axios
            .get('https://localhost:44300/Movies/GetMovieName?name=Enemy')
            .then(res => {
                console.log(res)
                setMovieData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            

    }, [])

    console.log("Data", movieData);
    if (movieData === undefined) return <h1>Loading...</h1>

    return (
        <>


          
                {movieData.map(value => {
                    return (
                        <>

                            <div className="container"  >
                                <div className="movie_card" id="bright" >
                                    <div className="info_section">
                                        <div className="movie_header">
                                            <img className="locandina" src="{{x.moviePicture}}" />
                                            <h1>{`${value.title}`}</h1>
                                            <h4> {`${value.director}`}</h4>
                                            <span className="minutes">{value.minutes} min</span>
                                            <p> Romance </p>
                                        </div>
                                        <div className="movie_desc">
                                            <p className="text">
                                                {value.about}
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
                                        src={value.videoLink}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title="video"
                                    />{" "}
                                </div>
                            </div>

                        </>
                    );
                })}
         
        </>
    )
}


export default MovieDetails

