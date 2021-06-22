import React from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {

    },

    button:{
    display: 'block',
    position: 'fixed',
    right: '1%',
    bottom: '50%',
    zIndex: '90',[theme.breakpoints.up('sm')]: {
        display: 'block',
        right: '6%',
        top: '12%',
      }
    }

}))

const CartIcon = ({totalItems}) => {
    const classes = useStyles();
    return (
        <div className={classes.button}>
        <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    )
}

export default CartIcon
