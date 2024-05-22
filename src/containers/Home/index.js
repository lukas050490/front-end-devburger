import React from 'react'
import HomeLogo from '../../assets/logo-home (1).svg'

import { Container, HomeImg } from './styles'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
function Home() {
  
    return (
        <Container>
            <HomeImg src={HomeLogo} alt='logodaHome' />
            <CategoryCarousel />
            <OffersCarousel/>
        </Container>
    )
}

export default Home
