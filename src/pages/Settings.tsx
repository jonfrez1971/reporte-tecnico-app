import React from 'react'
import brand from '../config/brand.json'

export default function Settings(){
  return (
    <div>
      <h1 className="text-2xl font-bold">Ajustes</h1>
      <pre className="mt-4 bg-slate-800 p-4 rounded">{JSON.stringify(brand, null, 2)}</pre>
    </div>
  )
}
