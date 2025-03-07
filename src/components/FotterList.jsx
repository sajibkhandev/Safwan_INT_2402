import React from 'react'

const FotterList = ({text,className}) => {
  return (
    <li className={`text-lg text-white font-meduim font-jost pr-[30px] border-r border-white ${className}`}>{text}</li>
  )
}

export default FotterList