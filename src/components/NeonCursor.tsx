import React, { useEffect, useState } from 'react';

const NeonCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor circle */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-100 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
          width: '20px',
          height: '20px',
        }}
      >
        <div
          className="w-full h-full rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, #d97706 50%, transparent 70%)',
            boxShadow: `
              0 0 10px #f59e0b,
              0 0 20px #f59e0b,
              0 0 30px #f59e0b,
              inset 0 0 10px #d97706
            `,
          }}
        />
      </div>

      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: '40px',
          height: '40px',
        }}
      >
        <div
          className="w-full h-full rounded-full animate-spin"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #f59e0b, transparent)',
            filter: 'blur(2px)',
            opacity: isClicking ? 1 : 0.6,
          }}
        />
      </div>

      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-500"
        style={{
          left: position.x - 15,
          top: position.y - 15,
          width: '30px',
          height: '30px',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 40%, #f59e0b20 60%, transparent 80%)',
            animation: 'neonPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
};

export default NeonCursor;