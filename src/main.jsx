import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import Login from './pages/Login'

const AuthRoute = ({children}) => {
  const logged = localStorage.getItem('demo_logged') === '1'
  return logged ? children : <Navigate to="/login" replace />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<AuthRoute><App/></AuthRoute>}>
          <Route index element={<Dashboard/>} />
          <Route path="products" element={<Products/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
