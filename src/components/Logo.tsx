import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const subtextSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <img 
          src="https://cdn.poehali.dev/files/4cee6269-bec4-4d68-b2f4-00b8e77608ff.png" 
          alt="БМП - Бюро Мебельных Проектов"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold text-bmp-navy dark:text-bmp-gold ${textSizeClasses[size]} leading-tight`}>
            БМП
          </span>
          <span className={`text-bmp-navy/80 dark:text-bmp-gold/80 leading-tight font-medium ${subtextSizeClasses[size]}`}>
            Бюро Мебельных<br />Проектов
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;