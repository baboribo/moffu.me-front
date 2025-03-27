import { cva } from "class-variance-authority";

export const button = cva(
  'rounded-md py-1.5 font-medium transition-all',
  {
    variants: {
        variant: {
            primary: 'bg-sky-200 text-sky-900 hover:bg-blue-300 px-4',
            secondary: 'bg-slate-800 text-sky-200 hover:bg-slate-700 px-4',
            ghost: 'text-sky-200 hover:bg-slate-700 hover:px-2',
        },
        size: {
            sm: 'text-md',
            lg: 'text-lg',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'sm',
    },
  }
)