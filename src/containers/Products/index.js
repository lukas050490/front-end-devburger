import React, { useEffect, useState } from 'react'
import ProductsLogo from '../../assets/products-logo.svg'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import {CardProduct} from '../../components'
import formatCurrency from '../../Utils/formatCurrency'

 export function Products({location:{state}}) {
let categoryId =0
if(state?.categoryId){
    categoryId = state.categoryId
}

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState([categoryId])

    useEffect(() => {
        async function loadcategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map(product => {
                return {...product, formatedPrice:formatCurrency(product.price)}
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadcategories()
    }, [])

    useEffect(() => {
        if(activeCategory === 0){
            setFilteredProducts(products)
        } else{
     const  newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
     )
     setFilteredProducts(newFilteredProducts)
    }
    },[activeCategory,products])

    return (
        <Container>

            <ProductsImg src={ProductsLogo} alt='logodoproduct' />
            
            <CategoriesMenu>
                {categories &&
                    // eslint-disable-next-line array-callback-return
                    categories.map(category =>
                        <CategoryButton
                            type='button'
                            key={category.id}
                            isActiveCategory={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id)
                            }}
                        >{category.name}</CategoryButton>
                    )}
            </CategoriesMenu>
            <ProductsContainer>
                { filteredProducts && filteredProducts.map(product => (
                    <CardProduct  key={product.id} product={product}/>
                ))}
                
            </ProductsContainer>
        </Container>
    )
}


