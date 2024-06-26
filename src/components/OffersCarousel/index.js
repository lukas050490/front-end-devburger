import React, { useEffect, useState } from 'react'
import Offers from '../../assets/offers-home.png'
import api from '../../services/api'
import LinhaRodape from '../../assets/linha-rodapé.png'
import { Container, CategoryImg, ContainerItens, Image, Button, RodapeImg } from './styles'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../Utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { useHistory } from 'react-router-dom'

export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data
                .filter(product => product.offer)
                .map(product => {
                    return { ...product, formatedPrice: formatCurrency(product.price) }
                })

            setOffers(onlyOffers)

        }

        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ]

    return (
        <Container>
            <CategoryImg
                src={Offers}
                alt='logodaoferta'
                breakPoints={breakPoints} />

            <Carousel itemstoShow={4} style={{ width: '90%' }} breakPoints={breakPoints}>
                {offers &&

                    
                    offers.map(product =>
                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt='foto-da-oferta' />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button
                                onClick={() => {
                                    putProductInCart(product)
                                    push('/carrinho')
                                }}>Peça agora</Button>
                        </ContainerItens>
                    )
                }
            </Carousel>
            <RodapeImg src={LinhaRodape} alt='linha do rodapé' />
        </Container>
    )
}

