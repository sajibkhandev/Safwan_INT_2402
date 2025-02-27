import React from 'react'

const Progresber = ({perchentage,text}) => {
  let x=10
 
  
  return (
    <div className='w-[270px] h-[282px] bg-white shadow-2xl flex flex-col justify-center items-center gap-y-6'>
      <div className='w-[167px] h-[167px] border-[#E5745D] border-[10px]  rounded-full text-[34px] text-[#E5745D] font-vol font-semibold flex justify-center items-center'>
        {x}%
      </div>
      <h3 className='text-[26px] text-[#00413D] font-vol font-semibold'>{text}</h3>
    </div>
  )
}

export default Progresber