import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import SignaturePadLib from 'signature_pad'

type SignatureHandle = {
  toDataURL: () => string | null
}

const SignaturePad = forwardRef<SignatureHandle, {}>((_props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const padRef = useRef<any>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    padRef.current = new SignaturePadLib(canvas, { backgroundColor: 'rgba(255,255,255,0)' })
    const resize = () => {
      const ratio = Math.max(window.devicePixelRatio || 1, 1)
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * ratio
      canvas.height = h * ratio
      canvas.getContext('2d')!.scale(ratio, ratio)
      padRef.current.clear()
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useImperativeHandle(ref, () => ({
    toDataURL: () => {
      if (!padRef.current || padRef.current.isEmpty()) return null
      return padRef.current.toDataURL()
    }
  }))

  return (
    <div className="border rounded overflow-hidden" style={{width:300,height:150}}>
      <canvas ref={canvasRef} style={{width:'100%',height:'100%'}} />
    </div>
  )
})

export default SignaturePad
