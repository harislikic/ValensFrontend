import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './Components/Card';



import React, { useEffect, useState } from "react";

export default function Home() {



  const newurl = "https://localhost:44300/Movies/GetAllMovies";

  const [movieData, setData] = useState([]);
  async function getMovies() {
    const responseString = await fetch(newurl);
    const response = await responseString.json();
    setData(response);
  }


  useEffect(() => {
    getMovies();

  }, [])


  return (
    <>
      <div className="header">
        <nav>
          <ul>

          </ul>
        </nav>
        <form>
          <div className="search-btn">

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
