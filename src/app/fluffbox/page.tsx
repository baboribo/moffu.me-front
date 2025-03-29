import data from '@/lib/datas/fluffbox.json'
import Button from '@/components/button'
import OvershootOut from '@/components/OvershootOut'

export default function About() {
    return (

      <div>
        <OvershootOut>
          <div className="m-5 flex inline-table mb-3">
          {/* <Link href="/" className="text-base text-sky-200">뒤로가기</Link> */}
          <Button variant='ghost' href='/'>뒤로가기</Button>
          <h1 className="text-4xl text-sky-50">
            떨굼상자
          </h1> 
          <p className="text-base text-slate-200">
            떨굼상자는 공유하고 싶은 파일들을 모아두는 공간이에요.
          </p>
          </div>
          <div className='mx-5'>
            <ul className="space-y-4">
              {data.map((item, i) => (
                <li key={i} className="p-2 rounded-lg">
                  <h2 className="text-lg">{item.title}</h2>
                  <p className="text-base text-slate-200 mb-2">{item.description}</p>
                  <div className="flex">
                    <Button variant='secondary' size='lg' href={item.downurl}>다운로드</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </OvershootOut>
      </div>
    );
  }