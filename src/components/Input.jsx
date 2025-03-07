import React from 'react'

const Input = ({placeholer}) => {
  return (
    <input className='my-12 w-[45%] pb-3 border-[#00413d1a] border-b placeholder:text-[#00413D] placeholder:text-base' type="text" placeholder={placeholer}/>
  )
}

export default Input