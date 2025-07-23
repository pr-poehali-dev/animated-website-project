import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <img 
          src="https://cdn.poehali.dev/files/4cee6269-bec4-4d68-b2f4-00b8e77608ff.png" 
          alt="БМП - Бюро Мебельных Проектов"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-bmp-navy dark:text-bmp-gold ${textSizeClasses[size]}`}>
            БМП
          </span>
          <span className="text-xs text-bmp-navy/70 dark:text-bmp-gold/70 leading-tight">
            Бюро Мебельных<br />Проектов
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;