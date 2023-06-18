// import icon2 from "./Vector.png";

import { Fragment, useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout1 from "../components/layout/Layout1";
import { Signin } from "../components/Signin/Signin";
import { LabelText } from "../components/labelText/LabelText";
import Input from "../components/inputBox/Input";
import { ButtonLabel } from "../components/ButtonLabel/ButtonLabel";
import { AuthContext } from "../context/AuthContext";
// import Signin from "../components/Signin/Signin";
import { useNavigate,Navigate,useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Login() {
  const params=useParams()
 const navigate=useNavigate();
  const {setIsAuth,handleChange:loginHandlechange,handleSubmit}=useContext(AuthContext)
  const [field,setField]= useState({});
//  const [field, setField] = useState({});
 

  // useEffect(()=>{
  //   const token=localStorage.getItem("token");
  //   if(token){
  //     // console.log("logged");
  //     setIsAuth(true);
  //     // navigate(-1);
      
  //   }
  // })

  const handleChange = (event) => {
    // event.preventDefault();

    loginHandlechange(event)

    // const { name, value } = event.target;
    // setField((prev) => ({...prev, [name]: value}));
    // // console.log(field,"===fields");
    
  };
  const handleLogin=(event)=>{
    event.preventDefault();
    handleSubmit(event)
    
      navigate(-1);
    

  }

  return (
    <Fragment>
      <Header />
      <Layout1>
      <LabelText HeadingText={"Sign In"} headingClass="singn-in-head" />
      <form onSubmit={handleLogin} autoComplete="off">

        {/* onSubmit={(e)=>handleLogin(e)} */}
        <Input type="text"
        name={"username"}
        placeholder="user Name"
        id="id"
        classname="loginclass"
        onchange={handleChange}
        
        />
        <Input type="Password"
        name={"password"}
        placeholder="Password"
        id="id"
        classname="loginclass"
        onchange={handleChange}
        />

        <ButtonLabel buttonText={"Sign in"} buttonClass={"button-class"}/>
        <Link to={'/Forgot'}>
        <LabelText HeadingText={"Forgot Password"} headingClass="forgot-password" />
        </Link>
        </form>
        <Link to={'/Signup'} >

        <LabelText HeadingText={"Sign Up Now"} headingClass="singn-up" />
        </Link>
      </Layout1>
      <Footer />
    </Fragment>
  );
}
