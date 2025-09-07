import React, {useState} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const fullSales = {
  '7': [
    { date: '01/09', sales: 2400 },{ date: '02/09', sales: 1398 },{ date: '03/09', sales: 9800 },{ date: '04/09', sales: 3908 },{ date: '05/09', sales: 4800 },{ date: '06/09', sales: 3800 },{ date: '07/09', sales: 4300 }
  ],
  '30': Array.from({length:30}).map((_,i)=>({date:`${i+1}/8`, sales: Math.round(2000+Math.random()*8000)})),
  '365': Array.from({length:12}).map((_,i)=>({date:`${i+1}/2024`, sales: Math.round(20000+Math.random()*80000)}))
}

const ordersByCategory = [
  { name: 'Roupas', value: 400 },
  { name: 'Acessórios', value: 300 },
  { name: 'Calçados', value: 300 },
  { name: 'Outros', value: 200 },
]
const COLORS = ['#4F46E5', '#06B6D4', '#F59E0B', '#EF4444']

export default function Dashboard(){
  const [range,setRange] = useState('7')
  const salesData = fullSales[range]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Visão Geral</h3>
        <div className="flex items-center gap-2">
          <button onClick={()=>setRange('7')} className={`px-3 py-1 rounded ${range==='7'? 'bg-indigo-600 text-white':'bg-white dark:bg-slate-700 border'}`}>7 dias</button>
          <button onClick={()=>setRange('30')} className={`px-3 py-1 rounded ${range==='30'? 'bg-indigo-600 text-white':'bg-white dark:bg-slate-700 border'}`}>30 dias</button>
          <button onClick={()=>setRange('365')} className={`px-3 py-1 rounded ${range==='365'? 'bg-indigo-600 text-white':'bg-white dark:bg-slate-700 border'}`}>12 meses</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-300">Vendas</h4>
          <div style={{width:'100%',height:300}}>
            <ResponsiveContainer>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3} dot={{r:3}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-300">Pedidos por categoria</h4>
          <div style={{width:'100%',height:220}}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={ordersByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                  {ordersByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-300">Top produtos</h4>
          <ul className="mt-3 space-y-2">
            <li className="flex justify-between"><span>Camisa Azul</span><strong>R$ 4.320</strong></li>
            <li className="flex justify-between"><span>Tênis Runner</span><strong>R$ 3.210</strong></li>
            <li className="flex justify-between"><span>Boné Classic</span><strong>R$ 2.150</strong></li>
            <li className="flex justify-between"><span>Relógio Fit</span><strong>R$ 1.760</strong></li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-300">KPIs</h4>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
              <div className="text-sm text-slate-500">Receita</div>
              <div className="text-xl font-bold">R$ 12.430</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
              <div className="text-sm text-slate-500">Pedidos</div>
              <div className="text-xl font-bold">348</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
              <div className="text-sm text-slate-500">Ticket médio</div>
              <div className="text-xl font-bold">R$ 35,70</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
              <div className="text-sm text-slate-500">Conversão</div>
              <div className="text-xl font-bold">2.4%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
