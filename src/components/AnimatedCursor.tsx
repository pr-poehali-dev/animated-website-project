import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-12px, -12px)',
      }}
    >
      <div className="animate-pulse">
        <Icon 
          name="ArrowUpRight" 
          size={24} 
          className="text-bmp-gold drop-shadow-lg transform rotate-45" 
        />
      </div>
    </div>
  );
};

export default AnimatedCursor;