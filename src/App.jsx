import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Purchases from './pages/Purchases';
import Product from './pages/Product';
import Login from './pages/Login';
import NavBar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './components/protectedRoutes';
import CarShop from './pages/CarShop';


function App() {
  const isLoading = useSelector(state => state.isLoading)


  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car" element={<CarShop />} />

        <Route element={<ProtectedRoutes /> }>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      
      </Routes>
    </HashRouter>
  );
}

export default App
