export function shareWhatsApp(text: string, fileUrl?: string){
  // WhatsApp Web/Phone share using wa.me with prefilled text
  let message = text
  if (fileUrl) {
    message += `\n${fileUrl}`
  }
  const encoded = encodeURIComponent(message)
  const url = `https://wa.me/?text=${encoded}`
  window.open(url, '_blank')
}
