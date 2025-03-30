'use client'
import OvershootOut from '@/components/motion/OvershootOut'
import Button from '@/components/button'
import Modal from '@/components/modal'
import { useState } from 'react';

export default function UiTest() {
  const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <OvershootOut>
          <div className="flex flex-col gap-1 w-full items-center mb-3 pt-22 pb-10 bg-slate-950">
            {/* <Link href="/" className="text-base text-sky-200">뒤로가기</Link> */}
            {/* <Button variant='ghost' href='/'>뒤로가기</Button> */}
            <h1 className="text-4xl text-sky-50 text-center">
              유저 인터페이스 테스트
            </h1> 
            <p className="text-base text-slate-200 text-center">
              디자인 시스템을 만들기 위해 cva를 첫 경험하고, Tailwindcss를 계속해서 익히고, React와 JS와 TS를 더 배우고 있어요.
            </p>
          </div>
          <div className='mx-5'>
          <h3 className="text-2xl mt-5">버튼</h3>
            <div className="flex gap-2">
              <Button variant='primary' size='lg' href='/'>버튼</Button>
              <Button variant='secondary' size='lg' href='/'>버튼</Button>
            </div>
            <h3 className="text-2xl mt-5">모달</h3>
            <div className="flex gap-2">
              <Button variant='primary' size='lg' onClick={() => setIsOpen(true)}>모달 열기</Button>
            </div>
          </div>

          {isOpen && <Modal onClose={() => setIsOpen(false)} />}
        </OvershootOut>
      </div>
    );
  }
  