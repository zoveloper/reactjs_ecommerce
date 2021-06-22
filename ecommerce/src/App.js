import React,{useState,useEffect} from 'react'
import {commerce} from './lib/commerce'
import Products from './components/Products/Products'
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
        const item = await commerce.cart.add(productId,quantity)
        setCart(item.cart)
    }

    useEffect(()=>{
        fetchProducts()
        fetchCart()
    },[])

    console.log(cart)
    return (
        <div className="app">
            <CartIcon totalItems={cart.total_items}/>
            <Navbar/>
            <main className="main" >
            <Products products={products} onAddToCart={handleAddToCart}/>
            </main>
        </div>
    )
}

export default App
