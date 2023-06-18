import React from 'react'
import Layout1 from '../components/layout/Layout1'
import { LabelText } from '../components/labelText/LabelText'
import Header from '../components/Header/Header'
import './Signup.css'
import Input from '../components/inputBox/Input'
import { ButtonLabel } from '../components/ButtonLabel/ButtonLabel'

export const Signup = () => {
  return (
<>
<Header />
<Layout1>
<LabelText HeadingText={"Sign Up"} headingClass="singn-up-head" />
<Input type="text"
        name={"username"}
        placeholder="user Name"
        id="id"
        classname="loginclass"
        // onchange=""
        
        />
<Input type="email"
        name={"username"}
        placeholder="Email"
        id="id"
        classname="loginclass"
        // onchange=""
        
        />
<Input type="Password"
        name={"username"}
        placeholder="Password"
        id="id"
        classname="loginclass"
        // onchange=""
        
        />
<Input type="emPasswordail"
        name={"username"}
        placeholder="Re Enter Password"
        id="id"
        classname="loginclass"
        // onchange=""
        
        />

<ButtonLabel buttonText={"Sign Up"} buttonClass={"button-class"}/>

        
        

</Layout1>
</>
  )
}
