import React from 'react'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'
import ServiceLayout from '../layouts/ServiceLayout'
import ProgresBerSecotion from '../layouts/ProgresBerSecotion'
import AboutLayout from '../layouts/AboutLayout'
import Project from '../layouts/Project'
import Client from '../layouts/Client'
import Contact from '../layouts/Contact'

const Home = () => {
  return (
   <>
   <Navber/>
   <Banner/>
   <ServiceLayout/>
   <AboutLayout/>
   <ProgresBerSecotion/>
   <Project/>
   <Client/>
   <Contact/>


   </>
  )
}

export default Home