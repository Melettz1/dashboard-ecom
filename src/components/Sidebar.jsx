import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Box, ShoppingCart, Settings } from 'lucide-react'

const NavItem = ({to, icon: Icon, children}) => (
  <NavLink to={to} className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg ${isActive? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
    <Icon size={18} />
    <span className="font-medium">{children}</span>
  </NavLink>
)

export default function Sidebar(){
  return (
    <aside className="w-72 bg-white dark:bg-slate-800 border-r dark:border-slate-700 min-h-screen flex flex-col">
      <div className="p-6 border-b dark:border-slate-700">
        <h1 className="text-xl font-semibold">E‑com Analytics</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Painel para pequenas lojas</p>
      </div>
      <nav className="p-6 space-y-2 flex-1">
        <NavItem to="/" icon={Home}>Dashboard</NavItem>
        <NavItem to="/products" icon={Box}>Produtos</NavItem>
        <NavItem to="/orders" icon={ShoppingCart}>Pedidos</NavItem>
        <NavItem to="/settings" icon={Settings}>Configurações</NavItem>
      </nav>
      <div className="p-6">
        <button onClick={() => {localStorage.removeItem('demo_logged'); location.href='/login'}} className="w-full py-2 bg-red-500 text-white rounded-lg">Sair</button>
      </div>
    </aside>
  )
}
