import React from 'react'
import Vector from '../assets/clientVector.png'
import Image from '../components/Image'

const ClientCard = () => {
  return (
    <div className='relative w-[570px]  bg-white shadow-md border-t-[8px] border-[#E5745D]'>
        <div className='absolute  -bottom-[30px] left-[40px]'>
            <Image src={Vector}/>
        </div>
        <p className='py-[30px] px-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
        typesetting industry.</p>
    </div>
  )
}

export default ClientCard