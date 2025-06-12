export const dynamicParams = true;
export const dynamic = 'force-dynamic'

import { Any } from 'next-sanity';
import { PortableText } from 'next-sanity';
import { getPosts } from '../../lib/sanity'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
// import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl pt-20">
      <div className="mb-8">
        <Alert variant="default">
          <AlertCircleIcon />
          <AlertTitle>잠시만요!</AlertTitle>
          <AlertDescription className='flex'>
            작은 기록장은 <Link href='https://until.blog/@babo'>'언틸 블로그'</Link>로 대체될 예정이에요.
          </AlertDescription>
        </Alert>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          나의 작은 기록장
        </h1>
        <p className="text-muted-foreground">
          개발과 일상의 소소한 이야기들
        </p>
      </div>
      
      <div className="space-y-6">
        {posts.map((post: Any, index: number) => (
          <Card key={`${post.id}-${index}`} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {new Date(post.publishedAt).toLocaleDateString('ko-KR')}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="prose prose-invert prose-sm max-w-none">
                <PortableText 
                  value={post.body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className=" leading-relaxed mb-4 last:mb-0">
                          {children}
                        </p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-2xl font-bold mb-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-xl font-semibold mb-3">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-lg font-medium mb-2">
                          {children}
                        </h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-4 italic my-4">
                          {children}
                        </blockquote>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-semibold">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic">
                          {children}
                        </em>
                      ),
                      code: ({ children }) => (
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">
                          {children}
                        </code>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-1 mb-4">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="">{children}</li>
                      ),
                      number: ({ children }) => (
                        <li className="">{children}</li>
                      ),
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {posts.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground">아직 작성된 포스트가 없습니다.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}