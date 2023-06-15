import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { MovieSingle } from '../components/MovieList/MovieSingle'
// import { TMDB_IMAGE_URL } from "../../constants/tmdb-url";
export const MovieDetails = () => {
  // const param=useParams();
  // console.log(param,"My params");
  return (
    <>
    <Header/>
      <MovieSingle/>

    <Footer/>

    </>
  )
}
