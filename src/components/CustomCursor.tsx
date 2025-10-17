import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.contentEditable === 'true' ||
        target.closest('button, a, input, [contenteditable]') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer cursor - big transparent circle */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className="rounded-full border-2 border-primary/30 transition-all duration-300 ease-out"
          style={{
            width: isHovering ? 'var(--cursor-hover-size)' : 'var(--cursor-size)',
            height: isHovering ? 'var(--cursor-hover-size)' : 'var(--cursor-size)',
            transform: 'translate(-50%, -50%)',
            background: isHovering 
              ? 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0,255,0,0.05) 0%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Inner cursor - small dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className="w-1 h-1 rounded-full bg-primary transition-all duration-200"
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.8)',
          }}
        />
      </div>
    </>
  );
}
