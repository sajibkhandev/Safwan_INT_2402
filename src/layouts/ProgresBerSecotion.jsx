import React from 'react'
import Progresber from '../components/Progresber'
import Container from '../components/Container'
import Flex from '../components/Flex'

const ProgresBerSecotion = () => {
  



  return (
    <section className='pb-10'>
      <Container>
        <Flex className='justify-center md:justify-between flex-wrap gap-y-5 md:gap-y-0'>
          <Progresber text='Graphic Design' perchentage='70'/>
          <Progresber text='web design' perchentage='85'/>
          <Progresber text='Graphic Design' perchentage='100'/>
          <Progresber text='web design' perchentage='30'/>

        </Flex>
      </Container>
    </section>
       
    
  )
}

export default ProgresBerSecotion