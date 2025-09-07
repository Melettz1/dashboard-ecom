import React, {useState, useMemo} from 'react'

const initial = Array.from({length:12}).map((_,i)=>({
  id: i+1,
  title: ['Camisa Azul','Tênis Runner','Boné Classic','Relógio Fit','Jaqueta','Mochila'][i%6],
  price: Math.round(30 + Math.random()*200),
  stock: Math.round(Math.random()*120),
  sold: Math.round(Math.random()*500)
}))

export default function Products(){
  const [q,setQ]=useState('')
  const [sort,setSort]=useState('sold')
  const data = useMemo(()=> {
    return initial.filter(p=>p.title.toLowerCase().includes(q.toLowerCase())).sort((a,b)=>b[sort]-a[sort])
  },[q,sort])

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Produtos</h3>
        <div className="flex items-center gap-2">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar..." className="px-3 py-2 border rounded bg-transparent" />
          <select value={sort} onChange={e=>setSort(e.target.value)} className="px-3 py-2 border rounded bg-white dark:bg-slate-700">
            <option value="sold">Mais vendidos</option>
            <option value="stock">Estoque</option>
            <option value="price">Preço</option>
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="p-3">Produto</th>
              <th className="p-3">Preço</th>
              <th className="p-3">Estoque</th>
              <th className="p-3">Vendidos</th>
            </tr>
          </thead>
          <tbody>
            {data.map(p=> (
              <tr key={p.id} className="border-t dark:border-slate-700">
                <td className="p-3">{p.title}</td>
                <td className="p-3">R$ {p.price}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3">{p.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
