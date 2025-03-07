import React from 'react'
import Image from '../components/Image'
import Profile from '../assets/clientAvater.png'
import { FaStar } from 'react-icons/fa'
import Flex from '../components/Flex'

const ClientCard2 = () => {
  return (
    <Flex className='pt-10  items-center gap-x-[30px]'>
        <Image src={Profile}/>
        <div>
           <h3 className='text-xl text-[#00413D] font-vol font-semibold'>Michale Doie</h3>
           <p className='text-sm text-[#00413D] font-jost font-normal pt-[5px] pb-3'>Product Designer</p>
           <ul className='flex gap-x-0.5'>
            <li><FaStar className='text-[#FF9F3F] text-xs'/></li>
            <li><FaStar className='text-[#FF9F3F] text-xs'/></li>
            <li><FaStar className='text-[#FF9F3F] text-xs'/></li>
            <li><FaStar className='text-[#FF9F3F] text-xs'/></li>
            <li><FaStar className='text-[#FF9F3F] text-xs'/></li>
           </ul>
        </div>
    </Flex>
  )
}

export default ClientCard2