import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import List from   '../components/List'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Cv from '../assets/SajibCV.pdf'

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
          
           <Link to='/'> <List text="Home"/> </Link>
           <Link to='/service'> <List text="Services"/></Link>
           <Link to='/about'> <List text="About"/></Link>
           <Link to='/blog'> <List text="Blog"/></Link>
           <Link to='/contact'>  <List text="Contact"/></Link>
           
            
            
           
            
        </ul>
        </div>
        <div className='w-3/12 text-end'>
       <a  href={Cv}><Button text="Show My CV" /></a>
        </div>

        </Flex>
    </Container>
   </section>
  )
}

export default Navber