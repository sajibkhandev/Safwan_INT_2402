import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ServiceCard from '../components/ServiceCard'
import ServiceImage1 from '../../public/ServiceCardOne.png'
import ServiceImage2 from '../../public/ServiceCardTwo.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'

const ServiceLayout = () => {
  return (
    <section className='pt-[220px] pb-[120px]'>
        <Container>
          <SubHeading text="MY SERVICES"/>
            <Heading text='Provide Wide Range of Digital Services'/>
        

            <Flex className='justify-between pt-10'>
            <ServiceCard src={ServiceImage1} title="Ui/Ux Design" text="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
            <ServiceCard src={ServiceImage2} title="Mobile App Design" text="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
            <ServiceCard src={ServiceImage1} title="Web Design" text="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
           
            </Flex>
        
        </Container>
    </section>
  )
}

export default ServiceLayout