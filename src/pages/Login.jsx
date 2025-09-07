import React, {useState} from 'react'

export default function Login(){
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const submit=(e)=>{e.preventDefault(); localStorage.setItem('demo_logged','1'); location.href='/' }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <form onSubmit={submit} className="w-full max-w-md bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Entrar</h1>
        <label className="block text-sm">Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded mb-3 bg-transparent" />
        <label className="block text-sm">Senha</label>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} className="w-full p-2 border rounded mb-4 bg-transparent" />
        <button className="w-full py-2 bg-indigo-600 text-white rounded">Entrar (demo)</button>
      </form>
    </div>
  )
}
