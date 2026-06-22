import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import brand from '../config/brand.json'

export async function generatePDF(report: any): Promise<Blob> {
  // Simple demo: render a HTML fragment then convert
  const node = document.createElement('div')
  node.style.padding = '20px'
  node.style.background = '#fff'
  node.style.color = '#000'
  node.innerHTML = `
    <h2>${brand.companyName}</h2>
    <h3>Reporte Técnico</h3>
    <p>Cliente: ${report.clientName}</p>
    <p>Fecha: ${new Date(report.createdAt).toLocaleString()}</p>
    ${report.signature ? `<img src="${report.signature}" style="width:200px;border:1px solid #ccc" />` : ''}
  `

  document.body.appendChild(node)
  const canvas = await html2canvas(node, { scale: 2 })
  document.body.removeChild(node)
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' })
  const imgProps = (pdf as any).getImageProperties(imgData)
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  const blob = pdf.output('blob')
  return blob
}
