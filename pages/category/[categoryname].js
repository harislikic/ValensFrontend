
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


const Details = () => {


    const router = useRouter();
    var route = router.query.categoryname;
    console.log(route);

    const [Data, setData] = useState([])

    async function getcategorisdata() {
        console.log("?",router.query.categoryname);
        const response = await fetch("https://localhost:44300/Movies/Filters?genre=" + route  );
        const data = await response.json();
        setData(data);
        console.log("aaaa",data);
    }
    console.log('result', Data);

    useEffect(() => {

        getcategorisdata();
    }, [])


    return (
        <>

            <h1>Details page</h1>

            <div className="movie" >
                <img src={Data.moviePicture} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{Data.title}</h4>
                        <p className="rating">{Data.rating}</p>
                    </div>
                    <div className="overview">
                        <h1>Overview</h1>
                        {Data.about}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;