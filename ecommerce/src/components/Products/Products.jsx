import React from 'react'
import {Grid} from '@material-ui/core'

import Product from './Product/Product'

const Products = ({ products,onAddToCart }) => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={7} sm={6} md={5} lg={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
        </main>
    )
}

export default Products
