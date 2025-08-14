import { useEffect } from "react";

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  color: string;
}

export default function ClickSparkEffect() {
  useEffect(() => {
    const createSpark = (x: number, y: number) => {
      const sparkCount = 12;
      
      // Check if click is over yellow/light background
      const element = document.elementFromPoint(x, y);
      const isYellowBg = element?.closest('.hero-bg, .bg-primary-yellow, .bg-yellow-400, .bg-yellow-300') !== null;
      const hasYellowClass = element?.classList.contains('bg-primary-yellow') || 
                           element?.classList.contains('bg-yellow-400') ||
                           element?.classList.contains('bg-yellow-300') ||
                           element?.classList.contains('hero-bg');
      
      const isDarkSpark = isYellowBg || hasYellowClass;
      const colors = isDarkSpark ? 
        ['#1E40AF', '#2563EB', '#3B82F6', '#60A5FA', '#1D4ED8'] : 
        ['#FFD700', '#FFB000', '#FFA500', '#FF8C00', '#FFE55C'];
      
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        const angle = (360 / sparkCount) * i;
        const distance = 50 + Math.random() * 50;
        const size = 3 + Math.random() * 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = 0.6 + Math.random() * 0.4;
        
        spark.className = 'spark-effect';
        spark.style.cssText = `
          left: ${x}px;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 0 0 6px ${color}, 0 0 12px ${color};
          animation-duration: ${duration}s;
          --spark-angle: ${angle}deg;
          --spark-distance: ${distance}px;
        `;
        
        // Custom animation for each spark
        spark.style.setProperty('--end-x', `${Math.cos(angle * Math.PI / 180) * distance}px`);
        spark.style.setProperty('--end-y', `${Math.sin(angle * Math.PI / 180) * distance}px`);
        
        // Apply the movement animation
        spark.animate([
          {
            transform: 'translate(0, 0) scale(0) rotate(0deg)',
            opacity: '1'
          },
          {
            transform: `translate(${Math.cos(angle * Math.PI / 180) * distance * 0.7}px, ${Math.sin(angle * Math.PI / 180) * distance * 0.7}px) scale(1.2) rotate(180deg)`,
            opacity: '0.8',
            offset: 0.5
          },
          {
            transform: `translate(${Math.cos(angle * Math.PI / 180) * distance}px, ${Math.sin(angle * Math.PI / 180) * distance}px) scale(0.3) rotate(360deg)`,
            opacity: '0'
          }
        ], {
          duration: duration * 1000,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        document.body.appendChild(spark);
        
        // Remove the spark after animation
        setTimeout(() => {
          if (document.body.contains(spark)) {
            document.body.removeChild(spark);
          }
        }, duration * 1000);
      }
    };

    const createRipple = (x: number, y: number) => {
      // Check if click is over yellow/light background
      const element = document.elementFromPoint(x, y);
      const isYellowBg = element?.closest('.hero-bg, .bg-primary-yellow, .bg-yellow-400, .bg-yellow-300') !== null;
      const hasYellowClass = element?.classList.contains('bg-primary-yellow') || 
                           element?.classList.contains('bg-yellow-400') ||
                           element?.classList.contains('bg-yellow-300') ||
                           element?.classList.contains('hero-bg');
      
      const isDarkRipple = isYellowBg || hasYellowClass;
      const rippleColor = isDarkRipple ? '#2563EB' : '#FFD700';
      
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        border: 2px solid ${rippleColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        animation: rippleEffect 0.6s ease-out forwards;
      `;
      
      document.body.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        if (document.body.contains(ripple)) {
          document.body.removeChild(ripple);
        }
      }, 600);
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      createSpark(x, y);
      createRipple(x, y);
    };

    // Add the ripple effect CSS if not already added
    if (!document.querySelector('#ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes rippleEffect {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(4);
          }
        }
      `;
      document.head.appendChild(style);
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}