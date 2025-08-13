import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let isCleanedUp = false;

    const initScene = () => {
      if (!mountRef.current || isCleanedUp) return;

      const container = mountRef.current;

      // Create scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      );
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true
      });
      
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Create simple animated bus geometry
      const geometry = new THREE.BoxGeometry(2, 1, 4);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x1F2937, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const bus = new THREE.Mesh(geometry, material);
      scene.add(bus);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      camera.position.z = 8;
      camera.position.y = 2;

      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);
        bus.rotation.y += 0.005;
        bus.position.y = Math.sin(Date.now() * 0.001) * 0.5;
        bus.position.x = Math.cos(Date.now() * 0.0005) * 2;
        renderer.render(scene, camera);
      };

      const startAnimation = () => {
        if (!animationRef.current) {
          animate();
        }
      };

      const stopAnimation = () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = undefined;
        }
      };

      // Handle resize
      const handleResize = () => {
        if (!container || isCleanedUp) return;
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
      };
      window.addEventListener('resize', handleResize);

      // Intersection Observer to play/pause animation
      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
      observerRef.current.observe(container);

      return () => {
        window.removeEventListener('resize', handleResize);
        stopAnimation();
      };
    };

    initScene();

    return () => {
      isCleanedUp = true;
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
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