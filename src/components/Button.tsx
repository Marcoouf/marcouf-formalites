'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import React, { ElementType, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5',
  lg: 'px-6 py-3 text-base md:text-lg',
};

type ButtonProps = {
  children: React.ReactNode;
  icon?: ElementType;
  className?: string;
  href?: string;
  size?: ButtonSize;                 // 🔹 ajouté
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  children,
  icon: Icon,
  className,
  href,
  size = 'md',                       // 🔹 défaut
  ...props
}: ButtonProps) {
  const classNames = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    sizeClasses[size],               // 🔹 applique la taille
    className
  );

  if (href) {
    return (
      <Link href={href} {...props} className={classNames}>
        {children}
        {Icon && <Icon className="w-5 h-5 ml-2" />}
      </Link>
    );
  }

  return (
    <button {...props} className={classNames}>
      {children}
      {Icon && <Icon className="w-5 h-5 ml-2" />}
    </button>
  );
}