import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

export function useThree() {
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animationFrameRef = useRef<number>();

  const initThree = useCallback((container: HTMLElement) => {
    // Wait for Three.js to load
    if (!window.THREE) {
      return null;
    }

    // Clean up previous instance
    if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
      container.removeChild(rendererRef.current.domElement);
    }

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    
    const renderer = new window.THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    return { scene, camera, renderer };
  }, []);

  const cleanup = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (rendererRef.current) {
      rendererRef.current.dispose();
    }
  }, []);

  useEffect(() => {
    // Load Three.js from CDN
    if (!window.THREE) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => {
        // Three.js is now loaded
      };
      document.head.appendChild(script);
    }

    return cleanup;
  }, [cleanup]);

  return { initThree, cleanup };
}
