
import Card from './Components/Card';
import Link from 'next/dist/client/link';
import Id from './category/[id]'

import React, { useEffect, useState } from "react";

export default function Home() {



  const newurl = "https://localhost:44300/Movies/GetAllMovies";


  const [url_set, setUrl] = useState(newurl);



  const [movieData, setData] = useState([]);
  async function getMovies() {
    const responseString = await fetch(newurl);
    const response = await responseString.json();
    setData(response);
  }

  const [categorydata, setItems] = useState([]);
  async function getcategory() {
    const responseString = await fetch('https://localhost:44300/MovieGenre/GetAllCategorys');
    const response = await responseString.json();
    setItems(response);

  }
  console.log('category', categorydata);


  useEffect(() => {
    getMovies();
    getcategory();
  }, [url_set])

  const getDataCategory = (movieType) => {
    if (movieType == "Thriller") {
      newurl = 'https://localhost:44300/MovieGenre/GetAllMoviesById/1';
    }
    setUrl(newurl);
  }



  return (
    <>
  

      <div className="header">
        <nav>
          <ul>
            {
              categorydata.map((value) => {
                return (
                  <li><a href={`/category/${value.genreName}`} name={value.id} onClick={(e) => { getDataCategory(e.target.name) }}>{value.genreName}</a></li>
                
                )
              })
            }
            
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input type="text" placeholder="Enter movie name"
              className="inputText" >

            </input>
            <button><i class="fas fa-search"></i></button>
          </div>
        </form>
      </div>
      <div className="container">
        {
          (movieData.length == 0) ? <p className="notfound">Not found</p> : movieData.map((res, pos) => {
            return (
              <Card info={res} key={res.id} />
            )
          })
        }
      </div>
    </>
  )
}
