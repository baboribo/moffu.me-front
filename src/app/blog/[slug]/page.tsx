// app/blog/[slug]/page.tsx
import { getPostBySlug } from '../../lib/sanity'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogPostPage(props: { params: { slug: string } }) {
    const { slug } = props.params // 구조 분해를 통해 꺼냄
    const post = await getPostBySlug(slug)
  
    if (!post) {
      return <div className="p-8">글을 찾을 수 없습니다.</div>
    }
  
  return (
    <div className="p-8 max-w-2xl mx-auto">
        <Link href="/blog" className="text-blue-400 underline">뒤로가기</Link>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
            {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <p className="whitespace-pre-line leading-relaxed">{post.body}</p>
    </div>
  )
}