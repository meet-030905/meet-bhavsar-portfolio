import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  // Only show on non-touch devices
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    let mouseX = 0, mouseY = 0
    let rafX = 0, rafY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)
    }

    const animate = () => {
      rafX += (mouseX - rafX) * 0.18
      rafY += (mouseY - rafY) * 0.18
      if (cursor) {
        cursor.style.left = rafX + 'px'
        cursor.style.top = rafY + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = (e) => {
      if (
        e.target.closest('a, button, [role="button"], input, textarea, select, label')
      ) setIsHovering(true)
    }
    const onLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
      aria-hidden="true"
    />
  )
}
