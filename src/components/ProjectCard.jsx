import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'
import CardImage from '../assets/projectImage.png'
import { VscArrowRight } from 'react-icons/vsc'

const ProjectCard = ({text1,text2,text3,text4}) => {
  return (
    <div className='w-[370px] bg-white shadow-lg'>
        <Image src={CardImage}/>
        <div className='p-[30px]'>
            <h6 className='text-base text-[#E5745D] font-vol font-medium pb-[10px]'>{text1}</h6>
            <h4 className='text-2xl text-[#00413D] font-vol font-medium pb-[10px]'>{text2}</h4>
            <p className='text-base text-[#00413D] font-jost font-medium pb-6'>{text3}</p>
            <Flex className="items-center gap-x-2 text-lg text-[#00413D] font-vol font-medium">
            <h5>{text4}</h5>
            <VscArrowRight />
            </Flex>
        </div>

    </div>
  )
}

export default ProjectCard