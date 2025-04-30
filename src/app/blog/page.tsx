export const dynamicParams = true;
export const dynamic = 'force-dynamic'

import { Any } from 'next-sanity';
import { getPosts } from '../lib/sanity'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6 pt-20">
      <h1 className="text-white text-3xl font-bold">블로그</h1>
      {posts.map((post:Any) => (
        <div key={post.id} className="border-b pb-4">
          <h2 className="text-white text-xl font-semibold">
            {post.title}
          </h2>
          <p className="text-slate-200 text-base">
            {post.body}
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  )
}