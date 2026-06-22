import React, { useRef, useState } from 'react'
import SignaturePad from '../shared/SignaturePad'
import { saveReport, getAllReports } from '../lib/idb'
import { generatePDF } from '../lib/pdf'
import { shareWhatsApp } from '../lib/whatsapp'

export default function CreateReport(){
  const [clientName, setClientName] = useState('')
  const signatureRef = useRef<any>(null)

  const onSave = async () => {
    const signatureData = signatureRef.current?.toDataURL() || null
    const report = {
      id: Date.now().toString(),
      clientName,
      createdAt: new Date().toISOString(),
      signature: signatureData
    }
    await saveReport(report)
    const pdfBlob = await generatePDF(report)
    // example: create object URL and open WhatsApp share
    const url = URL.createObjectURL(pdfBlob)
    shareWhatsApp(`Reporte técnico para ${clientName}`, url)
    alert('Reporte guardado localmente y PDF creado (demo).')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Crear Reporte</h1>
      <div className="mt-4 space-y-4">
        <label className="block">
          <div className="text-sm">Nombre del cliente</div>
          <input value={clientName} onChange={(e)=>setClientName(e.target.value)} className="mt-1 p-2 rounded bg-slate-700" />
        </label>

        <div>
          <div className="text-sm mb-2">Firma del cliente</div>
          <SignaturePad ref={signatureRef} />
        </div>

        <div className="flex gap-2">
          <button onClick={onSave} className="px-4 py-2 bg-emerald-500 rounded">Guardar y Generar PDF</button>
        </div>
      </div>
    </div>
  )
}
