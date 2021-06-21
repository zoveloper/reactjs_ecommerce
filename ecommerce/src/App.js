import React from 'react'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import './app.css'

const App = () => {
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
