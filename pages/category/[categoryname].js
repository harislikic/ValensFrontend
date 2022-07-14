
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";




const Details = () => {

    const [Data, setData] = useState([])
  
    const router = useRouter();
    const categoryName = router.query.categoryname

    console.log('ruata',categoryName)
    
    async function getcategorisdata() {
      
        const response = await fetch("https://localhost:44300/Movies/GetByGenreName?genre=Thriller");
        const data = await response.json();
        setData(data);
   
    }
    console.log('result', Data);


    useEffect(() => {
        
        getcategorisdata();
      
    }, [router.query.counter])  
   

    return (
        <>
            {Data.map(value => {
                return (
                    <>
                        <div className="movie" >
                            <img src={value.moviePicture} className="poster"></img>
                            <div className="movie-details">
                                <div className="box">
                                    <h4 className="title">{value.title}</h4>
                                    <p className="rating">{value.rating}</p>
                                </div>
                                <div className="overview">
                                    <h1>Overview</h1>
                                    {value.about}

                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    )
}

export default Details;