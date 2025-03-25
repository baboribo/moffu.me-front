import Link from 'next/link' // 필수

export default function About() {
    return (
      <div className="m-5 flex inline-table">
        <Link href="/" className="text-base text-sky-200">뒤로가기</Link>
        <h1 className="text-3xl text-sky-50">
          유저 인터페이스 테스트
        </h1> 
        <p className="text-base text-sky-200">
          디자인 시스템을 만들기 위해 cva를 첫 경험하고, Tailwindcss를 계속해서 익히고, React와 JS와 TS를 더 배우고 있어요.<br></br>아직 콘텐츠가 없어요.
        </p>
      </div>
    );
  }
  