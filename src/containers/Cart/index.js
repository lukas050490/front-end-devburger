import React from 'react'
import CartLogo from '../../assets/cart-logo.svg'

import { Container, CartImg } from './styles'
import {CartItems} from '../../components'

 export function Cart() {
  
    return (
        <Container>
            <CartImg src={CartLogo} alt='logodocarrinho' />
            <CartItems/>
        </Container>
    )
}


