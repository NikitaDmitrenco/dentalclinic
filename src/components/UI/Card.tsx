import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-clinic-surface border border-clinic-border rounded-[6px] shadow-subtle p-6 transition-all duration-200 ${
        hoverable ? 'hover:border-clinic-border-hover hover:shadow-subtle-lg' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
