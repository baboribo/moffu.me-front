'use client'
import { motion } from "motion/react"

export default function OvershootOut({
    children,
    delay = 0,
  }: {
    children: React.ReactNode
    delay?: number
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275], delay }}
      >
        {children}
      </motion.div>
    )
  }