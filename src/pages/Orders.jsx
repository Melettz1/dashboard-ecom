import React from 'react'

const orders = Array.from({length:8}).map((_,i)=>({
  id: 1000+i,
  customer: ['Ana','Bruno','Carlos','Daniela','Eduardo','Fernanda','Gustavo','Helena'][i%8],
  total: Math.round(30+Math.random()*500),
  status: ['paid','pending','shipped'][i%3]
}))

export default function Orders(){
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Pedidos</h3>
      <div className="bg-white dark:bg-slate-800 rounded shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Cliente</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o=> (
              <tr key={o.id} className="border-t dark:border-slate-700">
                <td className="p-3">#{o.id}</td>
                <td className="p-3">{o.customer}</td>
                <td className="p-3">R$ {o.total}</td>
                <td className={`p-3 font-medium ${o.status==='paid'? 'text-green-600':'text-yellow-500'}`}>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
