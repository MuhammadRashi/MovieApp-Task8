import React, { useContext, useEffect, useState } from 'react'
import {API_KEY, TMDB_MOVIE_LIST_API_, TMDB_SEARCH_API, TMDB_VIDEO_API } from "../constants/tmdb-url";
import useHandleChange from './useHandleChange';
import axios from 'axios';
import { MovieContext } from '../context/MovieContext';
  

const useHandleMovie = () => {
    const [movie, setMovie] = useState([{}]);
    const {movieList,setMovieList} =useContext(MovieContext)
    const {searchInputValue} = useHandleChange
    // console.log(searchInputValue,"from movie hook");


      
    
    const getSearchMovie=async(searchInputValue)=>{
        try {
          const result=await axios(TMDB_SEARCH_API,{params:{query:searchInputValue}});
          setMovieList(result?.data?.results);
        //   console.log(movieList,"====search result");
          
        } catch (error) {
          console.error(error);s
          
        }
      }

      const getMovies=async()=>{
        try {
            const result=await axios(TMDB_MOVIE_LIST_API_);
            setMovieList(result?.data?.results);
            // console.log(movieList,"====search result");
            
          } catch (error) {
            console.error(error);s
            
          }

      }

           
  return {
    getSearchMovie,
    movieList,
    getMovies
    // getSingleMovie
  }
}

export default useHandleMovie