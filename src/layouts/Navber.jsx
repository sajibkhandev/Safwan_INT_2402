import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import List from   '../components/List'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Cv from '../assets/SajibCV.pdf'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const Navber = () => {
  let [open,setOpen]=useState(false)


  let hanldeClick=()=>{
    setOpen(!open)
    
    
    
  }

   
  return (
   <>
   {/* Desktop Design start */}
   <nav className='hidden md:block py-[18px]'>
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
   </nav>
   {/* Desktop Design end */}


   {/* Mobile Design start */}
       <nav className='relative block md:hidden px-3 py-5'>
        <Flex className='items-center justify-between'>
        <div><Image src={Logo}/></div>
        <div onClick={hanldeClick}>
          {
            open ?<ImCross /> : <FaBars />
          }
        </div>
        </Flex>

       {
        open &&  <ul className='absolute top-[78px]  left-0 z-40 w-full bg-blue-500 flex flex-col justify-center items-center gap-y-12 text-white text-lg font-semibold font-pop py-14'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/service'><li>Services</li></Link>
        
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
  
      </ul>
       }

       </nav>
   {/* Mobile Design end */}
   </>
  )
}

export default Navber