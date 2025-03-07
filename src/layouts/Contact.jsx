import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import ContantImage from '../assets/contact.png'
import Input from '../components/Input'
import Button from '../components/Button'

const Contact = () => {
  return (
    
    <section className='py-[120px]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-5/12'>
                <Image src={ContantImage}/>
                </div>
                <div className='w-7/12'>
                   <SubHeading className='!text-left' text='Get In Touch' />
                   <Heading className='!text-left w-auto' text='Feel Free to Contact' />
                   <Flex className='flex-wrap justify-between'>
                       <Input placeholer='Enter Name'/>
                       <Input placeholer='Enter Email'/>
                       <Input placeholer='Phone'/>
                       <Input placeholer='Subject'/>
                       <Input placeholer='Message'/>

                   </Flex>
                   <Button text="Contact Us"/>
            
                   
                </div>
            </Flex>

        </Container>
    </section>
  )
}

export default Contact