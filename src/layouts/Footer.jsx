import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import FooterLogo from '../assets/footerLogo.png'
import FotterList from '../components/FotterList'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { RiSkypeLine } from 'react-icons/ri'

const Footer = () => {
  return (
    
    <section className='bg-[#00413D] pt-20 pb-10'>
        <Container>
            <Image className='mx-auto' src={FooterLogo}/>

            <ul className='flex gap-x-6 justify-center py-[60px]'>
                <FotterList text='Home'/>
                <FotterList text='About'/>
                <FotterList text='Services'/>
                <FotterList text='Portfolio'/>
                <FotterList text='Blog'/>
                <FotterList className='!border-0' text='Contract'/>


            </ul>
        
        <ul className='flex justify-center gap-x-8 border-b border-white pb-[60px]'>
            <li className='w-[40px] h-[40px] rounded-full bg-[#E5745D] flex justify-center items-center'><FaInstagram className='text-white'/></li>
            <li className='w-[40px] h-[40px] rounded-full bg-[#E5745D] flex justify-center items-center'><RiSkypeLine className='text-white'/></li>
            <li className='w-[40px] h-[40px] rounded-full bg-[#E5745D] flex justify-center items-center'><FaFacebookF className='text-white'/></li>
        </ul>

        <p className='text-center text-xs text-white font-normal font-jost pt-10'>Copyright © 2023 Design By Estiak. All rights reserved.</p>


        </Container>
    </section>
  )
}

export default Footer