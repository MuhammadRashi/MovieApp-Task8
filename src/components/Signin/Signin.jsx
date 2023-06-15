import React, { Fragment } from 'react'
import Input from '../inputBox/Input'
import './signin.css'
import { LabelText } from '../labelText/LabelText'

export const Signin = () => {
  return (
    <Fragment>
        <LabelText HeadingText={"Sign In"}/>
        <Input type="text"
        name="text"
        placeholder="user Name"
        id="id"
        classname="loginclass"
        />
    </Fragment>
  )
}
