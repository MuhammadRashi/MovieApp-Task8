// import icon2 from "./Vector.png";

import './Home.css'

import { Fragment, useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieList from "../components/MovieList/MovieList";
import SearchBox from "../components/inputBox/SearchBox";
import useHandleChange from "../hooks/useHandleChange";
import useHandleMovie from "../hooks/useHandleMovie";
import { useDebounce } from "../hooks/useDebounce";
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const {searchInputValue, setSearchInputValue} = useHandleChange("");
  const {getSearchMovie,getMovies}=useHandleMovie();
  const {mode}=useContext(ThemeContext)
  
  useDebounce(searchInputValue,
    searchInputValue ==""? getMovies(): getSearchMovie);
    const handleChange=(event)=>{
    setSearchInputValue(event);
    getSearchMovie(searchInputValue);
  }

  useEffect(()=>{
    // document.body.classList.add("my-body-dark")
    if(mode){
      document.body.classList.remove("my-body-light");
      document.body.classList.add("my-body-dark");
    }else{
      document.body.classList.remove("my-body-dark");
      document.body.classList.add("my-body-light");
    }
    // {mode ? document.body.classList.add("my-body-dark") : document.body.classList.add("my-body-light") }
    // console.log(mode,"home mode.....");
    //  document.body.classList.add({mode ? "my-body-dark" : "my-body-dark" });
    
  },[mode])
  // useEffect(()=>{

  //     {searchInputValue=="" ? getMovies(): 
      
      
  //     getSearchMovie(searchInputValue)};
  //     // const timeout = setTimeout(() => {
  //     //   getSearchMovie(searchInputValue);
  //     // }, 200);
  //     // return()=>{
  //     //    clearTimeout(timeout);
  //     // }
  // },[searchInputValue]);

  // useEffect(()=>{
  //   // {searchInputValue=="" ? getMovies(): getSearchMovie(searchInputValue);}
  //   const timeout = setTimeout(() => {
  //     if (searchInputValue) {
  //       getSearchMovie(searchInputValue);
  //     }
  //     else{
  //       getMovies();
  //     }
  //   }, 200);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // },[searchInputValue])

  return (
    <Fragment>
      <Header />
      <SearchBox handleChange={handleChange}/>
      <MovieList/>
      <Footer />
    </Fragment>
  );
}
