import React from 'react'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'
import ServiceLayout from '../layouts/ServiceLayout'
import ProgresBerSecotion from '../layouts/ProgresBerSecotion'
import AboutLayout from '../layouts/AboutLayout'
import Project from '../layouts/Project'

const Home = () => {
  return (
   <>
   <Navber/>
   <Banner/>
   <ServiceLayout/>
   <AboutLayout/>
   <ProgresBerSecotion/>
   <Project/>


   </>
  )
}

export default Home