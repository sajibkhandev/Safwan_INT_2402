import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner.png'
import BannerImageTwo from '../assets/banner2.jpg'

const Banner = () => {
  return (
    <section style={{backgroundImage:`url(${BannerImage})`}} className='group overflow-hidden z-10  relative w-full bg-no-repeat bg-cover bg-center py-[100px] md:py-[221px] px-3 md:px-0 '>
        <div style={{backgroundImage:`url(${BannerImageTwo})`}} className='group-hover:right-0 duration-700 -z-10 absolute top-0 -right-full  w-5/12 h-full  bg-no-repeat bg-cover bg-center hidden md:block'></div>
        <Container>
            <h1 className='text-4xl sm:text-[60px] md:text-[100px] sm:leading-[80px] md:leading-[120px] text-white font-bold font-voll'>Hello! <span className='block'>I’m Zarror Nibors</span> </h1>
            <p className='pt-4 pb-10 text-xl text-[#ffffff80] font-normal font-jost w-auto md:w-[670px] leading-8	'>I’am freelance <span className='text-white '>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
         <Link to='/about'><Button text='Contact Me'/></Link>

        </Container>

    </section>

  )
}

export default Banner