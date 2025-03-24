// app/blog/page.tsx
import { getPosts } from '../lib/sanity'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
        <div className='flex gap-2 flex-col'>
            <Link href="/" className="text-blue-400 underline">뒤로가기</Link>
            <h1 className="text-3xl font-bold">블로그</h1>
        </div>

      {posts.map((post: any) => (
        <div key={post._id} className="border-b pb-4">
          <Link href={`/blog/${post.slug.current}`}>
            <h2 className="text-xl font-semibold hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-500 text-sm">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  )
}