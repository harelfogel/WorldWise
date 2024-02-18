import React, { Suspense } from 'react';
import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Product from './pages/Product'
// import Pricing from './pages/Pricing';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form'
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthCOntext';
import ProtectedRoute from './pages/ProtectedRoute';
import SpinnerFullPage from './components/SpinnerFullPage';

const Homepage = lazy((() => import("./pages/Homepage")));
const Pricing = lazy((() => import("./pages/Pricing")));
const Product = lazy((() => import("./pages/Product")));
const Login = lazy((() => import("./pages/Login")));
const AppLayout = lazy((() => import("./pages/AppLayout")));


export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index path="/" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="app" element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Navigate replace to="countries" />} />
                <Route path="cities" element={<CityList />} />
                <Route path='cities/:id' element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider >
  )
}


