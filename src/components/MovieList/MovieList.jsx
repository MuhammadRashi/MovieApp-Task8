import "./MovieList.css";
// import imgSerch from "./assets/vector.png";
// import icon2 from "../Vector.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import { TMDB_IMAGE_URL } from "../../constants/tmdb-url";
import { Fragment, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { Link } from "react-router-dom";

export default function MovieList() {
  
  const { movieList: MovieListt } = useContext(MovieContext);
  // console.log(MovieListt,"===movie list");
  
  return (

    <div className="list-container">
      {MovieListt != null && MovieListt.map((data) =>(

          <div key={`"id"${data.id}`} className="movie-box-container" >
            <Link to={`/MovieDetails/${data.id}`}>
              {/* {TMDB_IMAGE_URL + data.poster_path !=null ? <img className="movie-image" src={TMDB_IMAGE_URL + data.poster_path} alt=""  /> : <img className="movie-image" src="./sample.webp" alt=""  />} */}
              <img className="movie-image" src={TMDB_IMAGE_URL + data.poster_path} alt=""  />
            </Link>
            
          </div>
      )
      )};

     
    </div>
  );
}
