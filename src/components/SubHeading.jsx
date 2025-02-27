import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <h4 className={`text-center text-lg text-[#E5745D] font-vol font-medium ${className}`}>{text}</h4>
  )
}

export default SubHeading