import React, { useEffect, useState } from 'react'
import ProductsLogo from '../../assets/products-logo.svg'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoriesMenu } from './styles'

function Products() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState([0])

    useEffect(() => {
        async function loadcategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        loadcategories()
    }, [])

    return (
        <Container>

            <ProductsImg src={ProductsLogo} alt='logodoproduct' />
            <CategoriesMenu>
                {categories &&
                    // eslint-disable-next-line array-callback-return
                    categories.map(category => {
                        <CategoryButton 
                        type='button'
                         key={category.id}
                         isActiveCategory={activeCategory === category.id}
                         onClick={() =>{
                            setActiveCategory(category.id)
                         }}
                         >{category.name}</CategoryButton>
                    })}
            </CategoriesMenu>
        </Container>
    )
}

export default Products
