import React from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {

    },

    button:{
    display: 'block',
    position: 'fixed',
    right: '7%',
    top: '45%',
    zIndex: '9999',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
        right: '1%',
        top: '45%',
      }
    }

}))

const CartIcon = ({totalItems}) => {
    const classes = useStyles();
    return (
        <div className={classes.button}>
        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    )
}

export default CartIcon
