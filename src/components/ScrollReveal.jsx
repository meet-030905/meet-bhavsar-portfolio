import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * ScrollReveal — wraps children with a fade+slide-up entrance.
 * Respects prefers-reduced-motion via CSS; Framer Motion reads it too.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 40,
  className = '',
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
