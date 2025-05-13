'use client'

import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion'; // motion/react 아닌 framer-motion 기준
import OvershootOut from './OvershootOut';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <OvershootOut key={pathname}>
        {children}
      </OvershootOut>
    </AnimatePresence>
  );
}