import Button from "./button"
import Link from "next/link"
export default function Nav(){
    return (
        <div className="
        fixed 
        w-full 
        left-1/2 
        -translate-x-1/2 
        flex 
        bg-slate-900/50
        backdrop-blur-sm 
        p-2
        pl-6 
        justify-center 
        items-center 
        overflow-hidden 
        rounded-xl 
        z-50">
            <Link href='/' className="absolute left-6 text-2xl text-white">☁️</Link>
            <div className="flex gap-0 rounded-4xl overflow-hidden transition-all">
                <Button variant='ghost' size='lg' href='/'>'/'</Button>
                <Button variant='ghost' size='lg' href='/about'>소개</Button>
                <Button variant='ghost' size='lg' href='/blog'>작은 블로그</Button>
                <Button variant='ghost' size='lg' href='/box'>떨굼상자</Button>
            </div>
        </div>
    )
}