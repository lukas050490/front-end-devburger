import React, { useEffect,useState } from 'react'
import Offers from '../../assets/offers-home.png'
import api from '../../services/api'
import LinhaRodape from '../../assets/linha-rodapé.png'
import { Container, CategoryImg, ContainerItens, Image, Button, RodapeImg  } from './styles'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../Utils/formatCurrency'

 export function OffersCarousel() {
const [offers,setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const {data} = await api.get('products')
            
            const onlyOffers = data
            .filter(product => product.offer)
            .map(product => {
                return {...product, formatedPrice:formatCurrency(product.price)}
            })

            setOffers(onlyOffers)
            
        }
       
        loadOffers()
    },[])

const breakPoints = [
    {width:1,itemsToShow:1},
    {width:400,itemsToShow:2},
    {width:600,itemsToShow:3},
    {width:900,itemsToShow:4},
    {width:1300,itemsToShow:5},
]

    return (
        <Container>
            <CategoryImg
             src={Offers} 
             alt='logodaoferta'
             breakPoints={breakPoints} />

            <Carousel itemstoShow={5} style={{width:'90%'}} breakPoints={breakPoints}>
                {offers &&
                 
                 // eslint-disable-next-line array-callback-return
                 offers.map(product => 
                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt='foto-da-oferta'/>
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button>Peça agora</Button>
                        </ContainerItens>
                    )
                }
            </Carousel>
            <RodapeImg src={LinhaRodape} alt='linha do rodapé'/>
        </Container>
    )
}

