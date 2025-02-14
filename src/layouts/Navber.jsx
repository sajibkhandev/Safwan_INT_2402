import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import List from   '../components/List'
import Logo from '../assets/logo.png'

const Navber = () => {
  return (
   <section className='py-[18px]'>
    <Container>
        <Flex className='items-center'>
        <div className='w-3/12'>
        <Image src={Logo}/>
        </div>
        <div className='w-6/12  '>
        <ul className='flex gap-x-12 justify-center'>
            <List text="Home"/>
            <List text="Pages"/>
            <List text="Services"/>
            <List text="Blog"/>
            <List text="Contact"/>
            
        </ul>
        </div>
        <div className='w-3/12 text-end'>
        <Button text="Download CV"/>
        </div>

        </Flex>
    </Container>
   </section>
  )
}

export default Navber