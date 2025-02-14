import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-lg text-primary font-normal font-jost list-none hover:text-secondary duration-300 ursor-pointer ${className}`}>{text}</li>
  )
}

export default List