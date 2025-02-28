import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='group overflow-hidden z-10  relative w-full bg-banner bg-no-repeat bg-cover bg-center py-[221px]'>
        <div className='group-hover:right-0 duration-700 -z-10 absolute top-0 -right-full  w-5/12 h-full bg-banner2 bg-no-repeat bg-cover bg-center'></div>
        <Container>
            <h1 className='text-[100px] text-white font-bold font-voll'>Hello! <span className='block'>I’m Zarror Nibors</span> </h1>
            <p className='pt-4 pb-10 text-xl text-[#ffffff80] font-normal font-jost w-[670px] leading-8	'>I’am freelance <span className='text-white '>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
         <Link to='/about'><Button text='Contact Me'/></Link>

        </Container>

    </section>

  )
}

export default Banner