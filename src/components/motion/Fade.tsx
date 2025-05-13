'use client'
import { motion } from "motion/react"

export default function Fade({
    children,
    delay = 0,
  }: {
    children: React.ReactNode
    delay?: number
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275], delay: 0 }}
      >
        {children}
      </motion.div>
    )
  }