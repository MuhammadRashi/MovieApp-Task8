// import { Link } from "react-router-dom";
// import logo from "../../assets/tcslogo.png";
import { useContext } from 'react';
import './Layout1.css'
import { ThemeContext } from '../../context/ThemeContext';
const Layout1 = ({ children }) => {
  const {setModeTheme,mode}=useContext(ThemeContext)
  return (
    <div className="login">
      <div className={mode ? "overlay-dark":"overlay-light"}>
        <div></div>
        {children}
      </div>

    </div>
  );
};

export default Layout1;
