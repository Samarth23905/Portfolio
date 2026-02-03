import React from 'react';
import { cn } from '../../lib/utils';

export function Button({ children, className, variant = 'default', size = 'default', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    default: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500',
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-500',
    secondary: 'bg-violet-500 text-white hover:bg-violet-600 focus:ring-violet-500',
    ghost: 'bg-transparent text-white hover:bg-white/10 focus:ring-white',
    link: 'text-emerald-500 underline hover:text-emerald-600 bg-transparent',
  };

  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-9 px-3 py-1 text-xs',
    lg: 'h-12 px-8 py-3 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}