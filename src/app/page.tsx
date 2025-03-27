import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-5 flex inline-table">
      <h1 className="text-4xl text-sky-50">
        Moffu ☁️
      </h1> 
      <p className="text-base text-sky-200">
        아직이에요.
      </p>
      <div className="flex gap-4">
        <Link href='/about'>
          <h4 className='text-xl'>소개</h4>
        </Link>
        <Link href='/ui-test'>
          <h4 className='text-xl'>UI 테스트</h4>
        </Link>
        <Link href='fluffbox'>
          <h4 className='text-xl'>떨굼상자</h4>
        </Link>
      </div>
    </div>
  );
}
