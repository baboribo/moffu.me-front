import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-5 flex inline-table">
      <h1 className="text-3xl text-sky-50">
        Moffu
      </h1> 
      <p className="text-base text-sky-200">
        아직이에요.
      </p>
      <Link href="/blog" className="text-blue-400 underline">블로그</Link>
    </div>
  );
}
