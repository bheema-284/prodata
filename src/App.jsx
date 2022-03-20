import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Routes } from './components/Routes';
 import { Routes, Route } from 'react-router-dom';
 import { Navbar } from './components/Navbar';
 import { HomePage } from './components/HomePage';
 import { ProductsPage } from './components/ProductsPage';
 import { ProductsDetailsPage } from './components/ProductsDetailsPage';
 import { NotFoundPage } from './components/NotFoundPage';
 function App() {
   return (
     <div className="App">
       <Navbar />
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/products" element={<ProductsPage />} />
         <Route path="/products/:id" element={<ProductsDetailsPage />} />
         <Route path="" element={<NotFoundPage />} />
       </Routes>       
     </div>
   );
 }

export default App;
