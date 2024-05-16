import React, { useEffect,useState } from 'react'
import Category from '../../assets/categories-home.png'
import api from '../../services/api'
import { Container, CategoryImg } from './styles'
import Carousel from 'react-elastic-carousel'

function CategoryCarousel() {
const [categories,setCategories] = useState([])

    useEffect(() => {
        async function loadcategories() {
            const {data} = await api.get('categories')
            
            setCategories(data)
        }
       
        loadcategories()
    }, [])


    return (
        <Container>
            <CategoryImg src={Category} alt='logodacategoria' />

            <Carousel itemstoShow={4}>
                {
                    categories && categories.map(category => {
                        <div key={category.id}>
                            <img src={category.url} alt='foto-da-category'/>
                            <button>{category.name}</button>
                        </div>
                    })
                }
            </Carousel>
        </Container>
    )
}

export default CategoryCarousel