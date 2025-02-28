import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import AboutOneImage from '../assets/aboutOneImage.png'
import AboutTwoImage from '../assets/aboutTwoImage.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'
import CvSecond from '../assets/SajibCV.pdf'

const AboutLayout = () => {
 
  return (
    <section className='py-[80px]'>
        <Container>
            <Flex>
            <div className='w-1/2'>
            <Flex className='justify-between'>
            <Image src={AboutOneImage}/>
            <div>
            <Image className='pb-[30px]' src={AboutTwoImage}/>
            <Image src={AboutTwoImage}/>
            </div>
            </Flex>
            
            </div>
            <div className='w-1/2'>
           <div className='px-[30px] pt-[10px]'>
           <SubHeading className='!text-left' text="About Me"/>
           <Heading className='!text-left w-[577px]' text='I Enjoy Solving Problems With Scalable Solutions'/>
           <p className='text-base text-[#00413D] font-jost font-normal pt-1'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, quia non numquam eius modi tempora incidunt lao magnam aliquam quaerat voluptatem reprehenderit.</p>
           <p className='text-base text-[#00413D] font-jost font-normal pt-4 pb-[50px]'>Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
           reprehenderit non numquam eius.</p>
          <a download href={CvSecond}> <Button text="Download CV"/></a>
           </div>
            </div> 
            </Flex>
        </Container>
    </section>
  )
}

export default AboutLayout