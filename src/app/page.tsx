import Link from 'next/link';
import linklist from '@/lib/datas/linklist.json'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"

export default function Home() {
  return (
    <div>
      <div className="w-full m-5 flex inline-table">
        <Alert variant="default">
          <AlertCircleIcon />
          <AlertTitle>잠시만요!</AlertTitle>
          <AlertDescription>
            여러분들이 보고 계신 현재 사이트의 언터페이스는 Shadcn/ui로 변경하는 과정을 거치고 있어요.
          </AlertDescription>
        </Alert>
        <h1 className="text-4xl">
          Moffu ☁️
        </h1>
        <p className="text-base">
          개인 사이트<br></br>
        </p>
        {/* --- 링크 섹션 --- */}
        {/* 섹션 헤딩 */} <h3 className='text-2xl mt-2'>링크</h3>
        <div className='gap-2 grid grid-row-2 md:grid-cols-3 lg:grid-cols-4 w-100%'>
          {linklist.map((item, i) => (
            <Link key={i} href={item.url} className="mt-1 mb-1 pl-4 pt-3 pb-1 pr-2 rounded-xl">
              <h2 className="text-lg">{item.title}</h2>
              <p className="text-base mb-2">{item.description}</p>
            </Link>
          ))}
        </div>
        {/* --- 링크 섹션 끝 --- */}
      </div>
    </div>
  );
}
