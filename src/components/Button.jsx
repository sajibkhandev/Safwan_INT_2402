import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`relative after:absolute after:top-[5px] after:left-[5px] after:w-[95%] after:h-[87%] after:content-[""] after:border-white after:border py-6 px-11 bg-secondary text-lg text-white font-medium font-jost ${className}`}>{text}</button>
  )
}

export default Button