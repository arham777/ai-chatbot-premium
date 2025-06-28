import React from 'react';

interface ThreeDButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ThreeDButton: React.FC<ThreeDButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '' 
}) => {
  const baseClasses = "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:shadow-none font-medium";
  
  const variantClasses = {
    primary: "border-neutral-700 bg-gradient-to-tr from-neutral-600 to-neutral-500 text-white active:border-neutral-600",
    secondary: "border-neutral-300 bg-gradient-to-tr from-white to-neutral-50 text-black active:border-neutral-200"
  };

  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-base"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
      <span className="relative flex items-center">
        {children}
      </span>
    </button>
  );
};

export default ThreeDButton; 