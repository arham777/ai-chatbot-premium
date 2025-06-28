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
  const baseClasses = "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-4 border-l-2 border-r-2 border-t border-opacity-20 shadow-2xl transition-all duration-150 ease-in-out active:translate-y-1 active:shadow-lg font-medium transform-gpu";
  
  const variantClasses = {
    primary: "border-black border-t-neutral-600 bg-gradient-to-b from-neutral-700 via-neutral-800 to-black text-white shadow-black/50 hover:shadow-black/70 active:border-neutral-900 hover:shadow-2xl",
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
      {/* Shine overlay for primary buttons */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      )}
      
      {/* Ripple effect */}
      <span className="absolute h-0 w-0 rounded-full bg-white opacity-20 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
      
      {/* Glossy top highlight */}
      {variant === 'primary' && (
        <span className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg"></span>
      )}
      
      <span className="relative flex items-center z-10">
        {children}
      </span>
    </button>
  );
};

export default ThreeDButton; 