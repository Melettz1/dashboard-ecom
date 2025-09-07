import React, {useEffect, useState} from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header(){
  const [dark, setDark] = useState(document.documentElement.classList.contains('dark'))
  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[dark])

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-slate-800 dark:border-slate-700">
      <div>
        <h2 className="text-lg font-semibold">Painel</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Resumo das métricas</p>
      </div>
      <div className="flex items-center gap-4">
        <input className="px-3 py-2 border rounded-lg bg-transparent text-sm" placeholder="Pesquisar..." />
        <motion.button whileTap={{scale:0.95}} onClick={()=>setDark(d=>!d)} className="p-2 rounded-lg border">
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.button>
        <div className="text-sm text-slate-600 dark:text-slate-300">Pedro</div>
      </div>
    </header>
  )
}
