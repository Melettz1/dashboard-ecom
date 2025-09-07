import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen">
          <Header />
          <main className="p-6 container">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
