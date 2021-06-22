import React,{useState,useEffect} from 'react'
import {commerce} from './lib/commerce'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import './app.css'

const App = () => {
    const [products,setProducts]= useState([])

    const fetchProducts = async()=>{
        const {data} = await commerce.products.list()
        
        setProducts(data)
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    console.log(products)
    console.log(process.env.REACT_APP_CHEC_PUBLIC_KEY)

    return (
        <div className="app">
            <Navbar/>
            <main className="main" >
            <Products/>
            </main>
        </div>
    )
}

export default App
