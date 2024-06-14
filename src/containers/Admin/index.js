
import React from 'react'

import paths from '../../constants/paths'
import { SiteMenuAdmin } from '../../components'
import { Container, ContainerItems } from './styles'
import Orders from './Orders'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import EditProduct from './EditProduct'

export function Admin({ match: { path } }) {
    return (
        <Container>
            <SiteMenuAdmin path={path}/>
            <ContainerItems>
                {path === paths.Order && <Orders />}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProduct && <NewProduct />}
                {path === paths.EditProduct && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}