import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-[6px] transition-colors duration-200 focus-ring cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none';
  
  const sizeStyles = {
    sm: 'h-9 px-3.5 text-xs',      // 36px
    md: 'h-11 px-5 text-sm',       // 44px
    lg: 'h-12 px-6 text-base',     // 48px
  };

  const variantStyles = {
    primary: 'bg-clinic-primary hover:bg-clinic-primary-hover active:bg-clinic-primary-active text-white border border-transparent shadow-subtle',
    secondary: 'bg-clinic-surface-alt hover:bg-slate-200 text-clinic-text border border-clinic-border',
    outline: 'bg-transparent hover:bg-clinic-primary-light text-clinic-primary border border-clinic-primary',
    ghost: 'bg-transparent hover:bg-clinic-surface-alt text-clinic-text border border-transparent',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
