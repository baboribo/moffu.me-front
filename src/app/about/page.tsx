import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function About() {
    return (
      <div>
          <div>
            <div className="m-5 flex inline-table mb-3">
            {/* <Link href="/" className="text-base text-sky-200">뒤로가기</Link> */}
            {/* <Button variant='ghost' href='/'>뒤로가기</Button> */}
            <h1 className="text-4xl">
              소개
            </h1> 
            <p className="text-base">
              Moffu는 2025년 3월 23일에 생긴 사이트이고, 개인 공개용 이메일과 개인 사이트 목적으로 사용되는 도메인이에요.<br></br>
              딱히 더 쓸 소개문은 없지만, <a href="https://github.com/Urooyo/moffu.me-front" className="text-base text-sky-200 hover:text-sky-300 underline transition-colors">Github 프로젝트</a>라도 여기에 링크해둘게요.<br></br>
            </p>
            </div>
            <div className='flex gap-2 mx-5'>
              <Button variant='default' asChild>
                <Link href='https://github.com/Urooyo/moffu.me-front'>Github 프로젝트 보기</Link>
              </Button>
              <Button variant='secondary' asChild>
                <Link href='https://github.com/Urooyo/moffu.me-front/commits/main/'>커밋 기록 보기</Link>
              </Button>
            </div>
          </div>
      </div>
    );
  }