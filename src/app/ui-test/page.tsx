import Link from 'next/link' // 필수

export default function About() {
    return (
      <div className="m-5 flex inline-table">
        <Link href="/" className="text-base text-sky-200">뒤로가기</Link>
        <h1 className="text-3xl text-sky-50">
          유저 인터페이스 테스트
        </h1> 
        <p className="text-base text-sky-200">
          아직이에요.
        </p>
      </div>
    );
  }
  