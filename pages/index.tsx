
import Card from './Components/Card';
import Link from 'next/dist/client/link';


import React, { useEffect, useState } from "react";

export default function Home() {



  //const yearurl="https://localhost:44300/Movies/Filtersbyyear?year="

  let newurl = "https://localhost:44300/Movies/GetAllMovies"



  const [url_set, setUrl] = useState(newurl);
  const [searchTerm, setSearchTerm] = useState('');
  const [selects, setSelects] = useState();


  console.log('select', selects);



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


  async function Sort(arg: string) {
    if (arg != "Date Of Relase" && arg != "Name") {
      const responseS = await fetch("https://localhost:44300/Movies/sort?value=" + arg)
      const response = await responseS.json();
      setData(response);

    }

    if (arg == "Date Of Relase" || arg == "Name") {
      if (arg == 'Date Of Relase')
        arg = 'year';
      else
        arg = 'name';
      const responseS = await fetch("https://localhost:44300/Movies/sort?value=" + arg)
      const response = await responseS.json();
      setData(response);
    }
  }

  const sortingBy = (event: any) => {
    Sort(event.target.value);
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
            <input type="text" placeholder="Enter movie name" color='black'
              onChange={event => { setSearchTerm(event.target.value) }}
              className="inputText"  >

            </input>
            <button><i className="fas fa-search"></i></button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className='filtersbuttons'>
          <label for="years">Choose a year:</label>
          <select value={selects} onChange={e => setSelects(e.target.value)}>
            <option></option>
            <option>2000</option>
            <option>2020</option>
            <option>2013</option>
            <option>2015</option>
          </select>
        </div>
        {
          (movieData.length == 0) ? <p className="notfound">Not found</p> : movieData.filter((val) => {
            if (searchTerm == "" || selects == "") {
              return val
            }
            else if (val.title.toLowerCase().startsWith(searchTerm.toLowerCase())) {
              return val
            }
          }).map((res, pos) => {
            return (
              <Card info={res} key={res.id} />
            )
          })
        }
      </div>
    </>
  )
}
