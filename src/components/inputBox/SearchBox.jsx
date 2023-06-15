import "./input.css";
// import "../../styles.css";
// import imgSerch from "./assets/vector.png";
// import icon2 from "../Vector.png";
// import icon2 from "../assets/../Vector.png";

// import icon2 from "./../assets/Vector.png";
import icon2 from "../../assets/Vector.png";
export default function SearchBox({handleChange}) {
  return (
    <div className="input-container">
      <img className="searchimg" src={icon2} alt="" />
      <input type="text" placeholder="Marvel" onChange={handleChange} />
    </div>
  );
}
