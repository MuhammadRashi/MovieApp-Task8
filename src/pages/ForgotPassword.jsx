import React from 'react'
import Header from '../components/Header/Header'
import Layout1 from '../components/layout/Layout1'
import Input from '../components/inputBox/Input'
import { LabelText } from '../components/labelText/LabelText'
import { ButtonLabel } from '../components/ButtonLabel/ButtonLabel'
export const ForgotPassword = () => {
  return (

<>
<Header/>
<Layout1>
<LabelText HeadingText={"Forgot Password"} headingClass="singn-up-head" />
<Input type="email"
        name={"email"}
        placeholder="Enter Email"
        id="id"
        classname="loginclass"
        // onchange=""
        
        />
<Input type="text"
        name={"otp"}
        placeholder="Enter OTP"
        id="id"
        classname="loginclass"
        // onchange=""
        
        />

<ButtonLabel buttonText={"Submit"} buttonClass={"button-class"}/>
   
</Layout1>

</>  )
}
