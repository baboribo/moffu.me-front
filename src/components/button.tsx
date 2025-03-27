import Link from 'next/link'
import { button } from '@/styles/button'

export default function Button({
  children,
  variant,
  size,
  href,
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'lg'
  href?: string
}) {
  if (href) {
    return (
      <Link href={href} className={button({ variant, size })}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={button({ variant, size })}>
      {children}
    </button>
  )
}