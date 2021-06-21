import React from 'react'
import { Card,CardMedia, CardActions, Typography,Iconbutton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>

            <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
        </Card>
    )
}

export default Product
