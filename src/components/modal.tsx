import Button from '@/components/button'
import { motion } from "motion/react"
export default function Modal({onClose}: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
          <motion.div 
          className="bg-slate-950 p-4 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}>
            <h3 className="text-2xl">성공</h3>
            <p>좋은 소식이에요, 모달이 성공적으로 열렸어요.</p>
            <Button variant='secondary' size='lg' onClick={() => onClose()}>확인</Button>
          </motion.div>
        </div>
      )
}
