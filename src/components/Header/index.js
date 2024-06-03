import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import Person from '../../assets/pessoa-simb.png'
import Cart from '../../assets/folha-simb.png'
import Burger from '../../assets/image-burgerdev-pq.svg'
import { Container,ContainerLeft,ContainerRight,ContainerText,PageLink,PageLinkExit } from './styles'


export function Header() {
    const {logout,userData} = useUser()
    const {push, location:{pathname}} = useHistory()
 
    const logoutUser = () => {
        logout()
        push('/login')
    }
    return (
        <Container>
            <ContainerLeft>
                <img src={Burger} alt='hamburguinho-logo' />
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('/produtos')}>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt='folha-carrinho' />
                </PageLink>

                <PageLink>
                    <img src={Person} alt='pessoa-carrinho' />
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}


