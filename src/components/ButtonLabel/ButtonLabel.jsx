import React from 'react'

export const ButtonLabel = ({buttonText,buttonClass}) => {
  return (
    <><button type="submit" className={buttonClass}>{buttonText}</button></>
  )
}
