import React, {useState} from 'react'

export default function Settings(){
  const [store,setStore]=useState('Loja Demo')
  const [currency,setCurrency]=useState('BRL')
  const save=(e)=>{e.preventDefault(); alert('Configurações salvas (demo)')}
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Configurações</h3>
      <form onSubmit={save} className="bg-white dark:bg-slate-800 p-4 rounded shadow max-w-xl">
        <label className="block mb-2 text-sm">Nome da loja</label>
        <input value={store} onChange={e=>setStore(e.target.value)} className="w-full p-2 border rounded mb-3 bg-transparent" />
        <label className="block mb-2 text-sm">Moeda</label>
        <select value={currency} onChange={e=>setCurrency(e.target.value)} className="p-2 border rounded mb-4 bg-white dark:bg-slate-700">
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
        </select>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Salvar</button>
      </form>
    </div>
  )
}
