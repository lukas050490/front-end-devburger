import React, { useEffect } from 'react'
import Category from '../../assets/categories-home.png'
import api from '../../services/api'
import { Container, CategoryImg } from './styles'
function CategoryCarousel() {
    useEffect(() => {
        async function loadcategories() {
            const response = await api.get('categories')
        }
        loadcategories()
    }, [])


    return (
        <Container>
            <CategoryImg src={Category} alt='logodacategoria' />
        </Container>
    )
}

export default CategoryCarousel