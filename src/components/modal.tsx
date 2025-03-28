import Button from '@/components/button'
export default function Modal({onClose}: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-slate-950 p-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl">성공</h3>
            <p>좋은 소식이에요, 모달이 성공적으로 열렸어요.</p>
            <Button variant='secondary' size='lg' onClick={() => onClose()}>확인</Button>
          </div>
        </div>
      )
}
