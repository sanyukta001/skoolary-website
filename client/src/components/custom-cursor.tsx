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
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`${cursorColor} drop-shadow-lg`}
        >
          <path d="M10.2426 13.4142L13.0711 10.5858C13.4616 10.1953 14.0948 10.1953 14.4853 10.5858L17.3137 13.4142C17.8663 13.9668 17.6426 15 16.8284 15H7.17157C6.35736 15 6.13369 13.9668 6.68629 13.4142L10.2426 13.4142Z" fill="currentColor"/>
          <path d="M10 15V18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V15H10Z" fill="currentColor"/>
          <path d="M12 4C10.3431 4 9 5.34315 9 7V11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11V7C15 5.34315 13.6569 4 12 4Z" fill="currentColor"/>
        </svg>
      </div>
    </>
  );
}