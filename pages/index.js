import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './Components/Card';
import process from 'process';


import React, { useEffect, useState } from "react";

export default function Home() {



  const newurl = "https://localhost:44300/Movies/GetAllMovies";

  const arr = ["Popular", "Thriller", "Kids", "Drama", "Comedie"];
  const [url_set, setUrl] = useState(newurl);
  const [search,setSearch]=useState();


  const [movieData, setData] = useState([]);
  async function getMovies() {
    const responseString = await fetch(newurl);
    const response = await responseString.json();
    setData(response);
  }

  const [categorydata, setItems] = useState([]);
  async function getcategory() {
    const responseString = await fetch('https://localhost:44300/MovieGenre/GetAllMovies');
    const response = await responseString.json();
    setItems(response);
    
  }
  console.log('category',categorydata);


  useEffect(() => {
    getMovies();
   getcategory();
  }, [url_set])

  const getDataCategory = (movieType) => {
    if (movieType == "Thriller") {
      categoryurl = 'https://localhost:44300/MovieGenre/GetAllMoviesById/1';
    }


    setUrl(newurl);
  }


  const searchMovie = (evt) => {
    if (evt.key == "enter") {
      newurl = 'https://localhost:44300/Movies/GetMovieName?name=' + search;
      setUrl(newurl);
      setSearch(" ");
    }
  }


  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {
              categorydata.map((value) => {
                return (
                  <li><a href="#" name={value.id} onClick={(e) => { getDataCategory(e.target.name) }}>{value.genreName}</a></li>
                )
              })
            }
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input type="text" placeholder="Enter movie name"
              className="inputText" onChange={(e) => { setSearch(e.target.value) }}
              value={search} onKeyPress={searchMovie}>
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
