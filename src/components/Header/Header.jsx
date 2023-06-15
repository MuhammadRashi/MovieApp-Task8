import "./Header.css";
import "../../styles/variable.css";

import logo from "../../assets/Frame 9.png";
import logout from "../../assets/Frame 2.png";
import light from "../../assets/black-lightbulb.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
export default function Header() {
 const {logoutHandle}=useContext(AuthContext)
 const {setModeTheme,mode}=useContext(ThemeContext)
  return (
    <div className={mode ? "header-container-dark":"header-container-light"}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="button-container">
        <img className={mode ? "btn-theme-dark" : "btn-theme-light"} src={light} alt="" onClick={setModeTheme}/>
        <img className={mode ? "btn-logout-dark":"btn-logout-light"} src={logout} onClick={logoutHandle} alt="" />
      </div>
    </div>
  );
}
