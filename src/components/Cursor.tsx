import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export function Cursor() {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(-40)
  const y = useMotionValue(-40)
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'drag' | 'view'>('default')

  const sx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (reduceMotion) {
      return
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)

      const target = e.target as HTMLElement
      const isClickable = target.closest('a, button, [role="button"]')
      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor') as 'drag' | 'view' | null

      if (cursorType) {
        setCursorState(cursorType)
      } else if (isClickable) {
        setCursorState('hover')
      } else {
        setCursorState('default')
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduceMotion, x, y])

  if (reduceMotion) {
    return null
  }

  const variants = {
    default: { width: 12, height: 12, backgroundColor: 'var(--ink)', mixBlendMode: 'normal' as const },
    hover: { width: 40, height: 40, backgroundColor: 'var(--accent-red)', mixBlendMode: 'difference' as const },
    drag: { width: 60, height: 60, backgroundColor: 'var(--ink)', mixBlendMode: 'normal' as const },
    view: { width: 80, height: 80, backgroundColor: 'var(--ink)', mixBlendMode: 'normal' as const }
  }

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: sx, y: sy, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px' }}
      variants={variants}
      animate={cursorState}
      aria-hidden="true"
    >
      {cursorState === 'drag' && 'DRAG'}
      {cursorState === 'view' && 'VIEW'}
    </motion.div>
  )
}
