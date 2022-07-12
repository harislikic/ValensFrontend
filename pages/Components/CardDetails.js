import React, { useEffect, useState } from "react";


const CardDetails = (movie) => {

    

    console.log("movie details api", movie);
    return (
        <>
            <p>hwllo</p>
            <div class="container"  >
            <div class="movie_card" id="bright"  >
                <div class="info_section">
                    <div class="movie_header">
                        <img class="locandina" src={movie.moviePicture} />
                        <h1>{movie.title}</h1>
                        <h4> {{ }} {{  }}</h4>
                        <span class="minutes">{{  }} min</span>
                        <p class="type">{{ }}</p>
                    </div>
                    <div class="movie_desc">
                        <p class="text">
                            {{ }}
                        </p>
                    </div>
                    <div class="buton-div">
                        <a class="btn" href="{{x.torentLink}}" rel="nofollow"><i class="fa fa-download"></i>Download </a>

                    </div>
                </div>

                <div class="blur_back bright_back"></div>
            </div>


         

</div >
        </>
    )
}

export default CardDetails;