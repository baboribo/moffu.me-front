import Button from '@/components/button';
import OvershootOut from '@/components/motion/OvershootOut';
import Link from 'next/link';
import linklist from '@/lib/datas/linklist.json'

export default function Home() {
  return (
    <div>
      <OvershootOut>
        <div className="w-full m-5 flex inline-table pt-12">
          <h1 className="text-4xl text-sky-50">
            Moffu ☁️
          </h1>
          <p className="text-base text-sky-200">
            개인 사이트
          </p>
          {/* --- 링크 섹션 --- */}
          {/* 섹션 헤딩 */} <h3 className='text-2xl text-sky-50 mt-2'>링크</h3>
          <div className='gap-2 grid grid-row-2 md:grid-cols-3 lg:grid-cols-4 w-100%'>
            {linklist.map((item, i) => (
              <Link key={i} href={item.url} className="mt-1 mb-1 pl-4 pt-3 pb-1 pr-2 bg-slate-800 rounded-xl">
                <h2 className="text-lg text-sky-200">{item.title}</h2>
                <p className="text-base text-slate-200 mb-2">{item.description}</p>
              </Link>
            ))}
          </div>
          {/* --- 링크 섹션 끝 --- */}
        </div>
      </OvershootOut>
    </div>
  );
}
