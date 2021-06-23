import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {commerce} from './lib/commerce'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import CartIcon from './components/CartIcon'
import './app.css'

const App = () => {

    const [products,setProducts]= useState([])
    const [cart,setCart] = useState({})

    const fetchProducts = async()=>{
        const {data} = await commerce.products.list()
        
        setProducts(data)
    }
    const fetchCart = async()=>{
        setCart(await commerce.cart.retrieve())
    }
    const handleAddToCart = async(productId, quantity) => {
        const {cart} = await commerce.cart.add(productId,quantity)

        setCart(cart)
    }
    const handleUpdateCartQty = async(productId,quantity)=>{
        const {cart} = await commerce.cart.update(productId,{quantity})
        
        setCart(cart)
    }
    const handleRemoveFromCart = async(productId) => {
        const {cart} = await commerce.cart.remove(productId)

        setCart(cart)

    }
    const handleEmptyCart = async() => {
        const {cart} = await commerce.cart.empty()

        setCart(cart)

    }


    useEffect(()=>{
        fetchProducts()
        fetchCart()
    },[])

    console.log(cart)
    return (
        <Router>
        <div className="app">
            <CartIcon totalItems={cart.total_items}/>
            <Navbar/>
            <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart}  />
          </Route>
          <Route exact path="/cart"
          onUpdateCartQty={handleUpdateCartQty} 
          onRemoveFromCart={handleRemoveFromCart} 
          onEmptyCart={handleEmptyCart}
          >
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>

        </Router>
    )
}

export default App
