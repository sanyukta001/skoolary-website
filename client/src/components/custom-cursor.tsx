import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkCursor, setIsDarkCursor] = useState(false);

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over yellow/light background
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        const isYellowBg = element.closest('.hero-bg, .bg-primary-yellow, .bg-yellow-400, .bg-yellow-300') !== null;
        const hasYellowClass = element.classList.contains('bg-primary-yellow') || 
                             element.classList.contains('bg-yellow-400') ||
                             element.classList.contains('bg-yellow-300') ||
                             element.classList.contains('hero-bg');
        
        setIsDarkCursor(isYellowBg || hasYellowClass);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, [role="button"], input, textarea, select, .card-hover');
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', updateCursorPos);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursorPos);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorColor = isDarkCursor ? 'text-dark-gray' : 'text-primary-yellow';

  return (
    <>
      {/* Custom pointing hand cursor */}
      <div
        className="fixed pointer-events-none z-[10000] transition-all duration-150 ease-out"
        style={{
          left: cursorPos.x - 10,
          top: cursorPos.y - 8,
          transform: `scale(${isHovering ? 1.3 : 1}) rotate(-15deg)`,
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          className={`${cursorColor} drop-shadow-lg`}
        >
          <path 
            d="M7 2L7 14L10.5 11L14 18L16 17L12.5 10L16 10L7 2Z" 
            fill="currentColor" 
            stroke={isDarkCursor ? '#1F2937' : '#E5B800'} 
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </>
  );
}