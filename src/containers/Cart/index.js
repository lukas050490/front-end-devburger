import React from 'react'
import CartLogo from '../../assets/cart-logo.svg'

import { Container, CartImg, Wrapper } from './styles'
import {CartItems, CartResume} from '../../components'

 export function Cart() {
  
    return (
        <Container>
            <CartImg src={CartLogo} alt='logodocarrinho' />
            <Wrapper>
            <CartItems/>
            <CartResume/>
            </Wrapper>
           
        </Container>
    )
}


