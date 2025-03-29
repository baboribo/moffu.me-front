import OvershootOut from '@/components/OvershootOut';
import Button from '@/components/button';

export default function Home() {
  return (
    <OvershootOut>
      <div className="m-5 flex inline-table">
        <h1 className="text-4xl text-sky-50">
          Moffu ☁️
        </h1> 
        <p className="text-base text-sky-200">
          아직이에요.
        </p>
        <div className="flex gap-2">
          <Button variant='secondary' size='lg' href='/about'>소개</Button>
          <Button variant='secondary' size='lg' href='/ui-test'>UI 테스트</Button>
          <Button variant='secondary' size='lg' href='/fluffbox'>떨굼상자</Button>
        </div>
      </div>
    </OvershootOut>
  );
}
