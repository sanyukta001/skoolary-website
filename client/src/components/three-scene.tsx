import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const rendererRef = useRef<any>(null);
  
  useEffect(() => {
    let isCleanedUp = false;

    // Load Three.js if not already loaded
    const loadThreeJS = () => {
      return new Promise<void>((resolve) => {
        if (window.THREE) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = () => resolve();
        script.onerror = () => resolve(); // Continue even if loading fails
        document.head.appendChild(script);
      });
    };

    const initScene = async () => {
      if (!mountRef.current || isCleanedUp) return;

      await loadThreeJS();

      if (!window.THREE || !mountRef.current || isCleanedUp) return;

      const container = mountRef.current;

      // Create scene
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
      rendererRef.current = renderer;

      // Create simple animated bus geometry
      const geometry = new window.THREE.BoxGeometry(2, 1, 4);
      const material = new window.THREE.MeshBasicMaterial({ 
        color: 0x1F2937, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const bus = new window.THREE.Mesh(geometry, material);
      scene.add(bus);

      // Add ambient light
      const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      camera.position.z = 8;
      camera.position.y = 2;

      const animate = () => {
        if (isCleanedUp) return;
        
        animationRef.current = requestAnimationFrame(animate);
        bus.rotation.y += 0.005;
        bus.position.y = Math.sin(Date.now() * 0.001) * 0.5;
        bus.position.x = Math.cos(Date.now() * 0.0005) * 2;
        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!container || isCleanedUp) return;
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    initScene();

    return () => {
      isCleanedUp = true;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current) {
        if (mountRef.current && mountRef.current.contains(rendererRef.current.domElement)) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
