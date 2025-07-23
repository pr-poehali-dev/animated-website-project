import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Добавляем новый след
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrails(prev => [...prev.slice(-15), newTrail]);
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Очистка следов
    const trailInterval = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(trailInterval);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Основной курсор */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-bmp-gold rounded-full mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1.2)',
        }}
      />
      
      {/* Следы курсора */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-40 rounded-full bg-bmp-gold/30"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
            width: 6,
            height: 6,
            opacity: (index + 1) / trails.length * 0.7,
            transform: `scale(${(index + 1) / trails.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;