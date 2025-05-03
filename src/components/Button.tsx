import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: ElementType
  className?: string
}

export default function Button({ children, icon: Icon, className, ...props }: ButtonProps) {
  return (
    <button
    className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border border-black px-6 py-2 font-medium text-black',
        'min-w-[160px]',
        'transition-all duration-300 ease-in-out',
        'hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:scale-[1.03]',
        'focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2',
        className
      )}      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5 ml-2" />}
    </button>
  )
}
