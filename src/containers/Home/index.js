import React from 'react'
import HomeLogo from '../../assets/logo-home (1).svg'

import { Container, HomeImg } from './styles'
import {CategoryCarousel,OffersCarousel} from '../../components'

 export function Home() {
  
    return (
        <Container>
            <HomeImg src={HomeLogo} alt='logodaHome' />
            <CategoryCarousel />
            <OffersCarousel/>
        </Container>
    )
}


