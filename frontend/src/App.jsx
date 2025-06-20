import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ShopContext } from './context/ShopContext'

const App = () => {

  const {token}=useContext(ShopContext)

  return (
    <div className='px-4 sm-[5vw] md-[7vw] lg-[9vw] mx-20'>
      <ToastContainer />
      {token==="" ?
      <Login />:
       (
        <>
        <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/collections" element={<Collections />}/>
        
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/products/:productid" element={<Product />}/>
        <Route path="/placeOrder" element={<PlaceOrder />}/>
      </Routes>
      <Footer />
        </>
      )
      
      }
      
      
    </div>
  )
}

export default App