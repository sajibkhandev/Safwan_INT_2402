import React from 'react'
import Navber from './layouts/Navber'
import Banner from './layouts/Banner'
import Service from './layouts/Service'
import About from './layouts/About'
import ProgresBerSection from './layouts/ProgresBerSecotion'


const App = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <Service/>
      <About/>
      <ProgresBerSection/>
      
     
    </div>
  )
}

export default App