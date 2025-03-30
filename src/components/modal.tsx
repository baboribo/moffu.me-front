import Button from '@/components/button'
import { motion } from "motion/react"
export default function Modal({onClose}: { onClose: () => void }) {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
        <div className="fixed inset-0 flex items-center justify-center bg-slate-950/40">
          <motion.div 
          className="flex flex-col bg-slate-950 p-4 rounded-2xl shadow-lg gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}>
            <div>
              <h3 className="text-2xl">성공</h3>
            <p>좋은 소식이에요, 모달이 성공적으로 열렸어요.</p>
            </div>
            <Button variant='secondary' size='lg' onClick={() => onClose()}>확인</Button>
          </motion.div>
        </div>
      </motion.div>

      )
}
