import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-center text-[50px] text-[#00413D] font-vol font-medium w-[522px] mx-auto pt-3 ${className}`}>{text}</h2>
  )
}

export default Heading