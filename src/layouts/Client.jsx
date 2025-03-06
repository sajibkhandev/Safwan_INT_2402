import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import ClientCard from '../components/ClientCard'
import Flex from '../components/Flex'

const Client = () => {
  return (
    
    <section className='py-[120px] bg-[#F9F4F1]'>
        <Container>
            <SubHeading text='Client Testimonial'/>
            <Heading text='Feedback From Client'/>

           <Flex className='justify-between pt-10'>
           <ClientCard/>
           <ClientCard/>
           </Flex>

        </Container>
    </section>
  )
}

export default Client