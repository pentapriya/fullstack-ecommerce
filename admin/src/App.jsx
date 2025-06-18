import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import ProductOrders from "./pages/ProductOrders";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';

export const backendURL=import.meta.env.VITE_BACKEND_URL
export const currency="$"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken}/>
      ) : (
        <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] text-gray-700 my-8 mx-auto ml-[max(5vw,25px)] text-base">
              <Routes>
                <Route path="/add" element={<AddProduct token={token}/>} />
                <Route path="/list" element={<ProductList token={token}/>} />
                <Route path="/orders" element={<ProductOrders token={token}/>} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
