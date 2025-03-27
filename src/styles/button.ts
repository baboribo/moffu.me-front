import { cva } from "class-variance-authority";

export const button = cva(
  'rounded-md px-4 py-1.5 font-medium transition-colors',
  {
    variants: {
        variant: {
            primary: 'bg-sky-200 text-sky-900 hover:bg-blue-300',
            secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        },
        size: {
            sm: 'text-sm',
            lg: 'text-lg',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'sm',
    },
  }
)