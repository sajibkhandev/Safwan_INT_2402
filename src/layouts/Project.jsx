import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'



const Project = () => {
  return (
    
    <section className='py-[100px]'>
        <Container>
            <Flex className='!block md:!flex justify-between items-center px-3 md:px-0'>
                <div>
                    <SubHeading className='!text-left' text='Recent Projects'/>
                    <Heading className='!text-left text-[32px] md:text-[52px] pb-5 md:pb-0' text='My Recent Projects'/>
                </div>
                <Flex className='gap-x-5'>
                <div className='group border border-black p-[15px] hover:bg-[#E5745D] duration-300 hover:border-transparent'><HiOutlineArrowSmallLeft className='text-black group-hover:text-white'/> </div>
                <div className='group border border-black p-[15px] hover:bg-[#E5745D] duration-300 hover:border-transparent'><HiOutlineArrowSmallRight className='text-black group-hover:text-white'/></div>
                </Flex>
            </Flex>

            <Flex className='justify-between flex-wrap px-3 md:px-0 gap-y-4 md:gap-y-0 pt-10 pb-[60px]'>
                <ProjectCard text4='View Case Studies' text3="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." text2="Branding & Digital Video Campaign For George’s Cafe" text1="Analytics, UI-Ux"/>
                <ProjectCard text4='View Case Studies' text3="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." text2="Digital Video Campaign For George’s Cafe" text1="Mobile App"/>
                <ProjectCard text4='View Case Studies' text3="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." text2=" Video Campaign For George’s Cafe" text1="Web Development"/>
                

            </Flex>

            <div className='text-center'>
            <Button text='Explore More'/>
            </div>

        </Container>
    </section>
  )
}

export default Project