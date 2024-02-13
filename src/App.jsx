import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from './pages/Product'
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form'
import { CitiesProvider } from './contexts/CitiesContext';
//import PageNotFound from './pages/pageNotFound';
//import AppLayout from './pages/AppLayout';

const url = 'http://localhost:9000';

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="countries" />} />
            <Route path="cities" element={<CityList />} />
            <Route path='cities/:id' element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  )
}


