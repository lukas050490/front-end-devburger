import React, { useEffect,useState } from 'react'
import Category from '../../assets/categories-home.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItens, Image, Button} from './styles'
import Carousel from 'react-elastic-carousel'


 export function CategoryCarousel() {
const [categories,setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const {data} = await api.get('categories')
            
            setCategories(data)
        }
       
        loadCategories()
    }, [])

const breakPoints = [
    {width:1,itemsToShow:1},
    {width:400,itemsToShow:2},
    {width:600,itemsToShow:3},
    {width:900,itemsToShow:4},
]

    return (
        <Container>
            <CategoryImg
             src={Category} 
             alt='logodacategoria'
             breakPoints={breakPoints} />

            <Carousel itemstoShow={4} style={{width:'90%'}} breakPoints={breakPoints}>
                {
                  // eslint-disable-next-line array-callback-return
                     categories && categories.map(category => 
                        <ContainerItens key={category.id}>
                            <Image  src={category.url} alt='foto-da-category'/>
                            <Button
                            to={{
                                pathname: '/produtos',
                                state:{categoryId: category.id}
                            }}
                            >{category.name}</Button>
                        </ContainerItens>
                        
                    )
                }
            </Carousel>
        </Container>
    )
}

