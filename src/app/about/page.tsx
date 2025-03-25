import Link from 'next/link' // 필수

export default function About() {
    return (
      <div className="m-5 flex inline-table">
        <Link href="/" className="text-base text-sky-200">뒤로가기</Link>
        <h1 className="text-3xl text-sky-50">
          소개
        </h1> 
        <p className="text-base text-gray-200">
          Moffu는 2025년 3월 23일에 생긴 사이트이고, 개인 공개용 이메일과 개인 사이트 목적으로 사용되는 도메인이에요.<br></br>
          딱히 더 쓸 소개문은 없지만, <a href="https://github.com/Urooyo/moffu.me-front" className="text-base text-sky-200 underline">Github 프로젝트</a>라도 여기에 링크해둘게요.<br></br>
        </p>
      </div>
    );
  }
  