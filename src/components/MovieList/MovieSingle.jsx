import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TMDB_IMAGE_URL, TMDB_MOVIE_LIST_API_ } from "../../constants/tmdb-url";
import axios from 'axios';
import useHandleMovie from '../../hooks/useHandleMovie';
import { MovieContext } from '../../context/MovieContext';

export const MovieSingle = () => {
    const [selectMovie, setSelectMovie] = useState([{}]);
    const {movieList}=useContext(MovieContext);
    const param = useParams();
    // console.log(movieList, "===list");
        const getSingleMovie = async () => {
        // const result = await axios(TMDB_MOVIE_LIST_API_,);
        // const movie = result.data.results.filter((item) => item.id == param.id);
        const movie = movieList.filter((item) => item.id == param.id);
        setSelectMovie(movie)
    }

    useEffect(() => {
        getSingleMovie();
    }, [])


    return (
        <>
            <div className="view-container">
                <div className="movie-details-container">
                    <div>{selectMovie[0].title}</div>
                    <img className="movie-image" src={TMDB_IMAGE_URL + selectMovie[0].poster_path} alt="" />

                </div>
            </div>


        </>
    )
}
