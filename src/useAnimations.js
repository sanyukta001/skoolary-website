import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const useAnimations = () => {
  useEffect(() => {
    // Initialize Three.js scene for background
    let scene, camera, renderer, particles;

    function initThreeJS() {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Create particle system
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 100;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;

        colors[i] = 0.2 + Math.random() * 0.3; // Blue
        colors[i + 1] = 0.4 + Math.random() * 0.3; // Light blue
        colors[i + 2] = 0.8 + Math.random() * 0.2; // White
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      camera.position.z = 5;

      // Add to hero section
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.appendChild(renderer.domElement);
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '1';
        renderer.domElement.style.pointerEvents = 'none';
      }

      animate();
    }

    function animate() {
      requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    }

    // Initialize Three.js
    if (typeof THREE !== 'undefined') {
      initThreeJS();
    }

    // Enhanced Hero Animations
    function initHeroAnimations() {
      // Animate hero elements on scroll
      gsap.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
      });

      gsap.from('.hero-stats', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out'
      });

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.hero-features', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: 'power2.out'
      });

      // Animate phone mockup
      gsap.from('.phone-mockup', {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      });

      // Animate floating cards
      gsap.from('.floating-card', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.2,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Animate floating shapes
      gsap.from('.shape', {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      // Animate scroll indicator
      gsap.from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.5,
        ease: 'power2.out'
      });
    }

    // Floating elements animation
    function initFloatingAnimations() {
      const floatingCards = document.querySelectorAll('.floating-card');
      
      floatingCards.forEach((card, index) => {
        gsap.to(card, {
          y: -10,
          rotation: 2,
          duration: 3,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: index * 0.5
        });
      });

      // Animate shapes
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: -20,
          rotation: 360,
          duration: 6,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: index * 0.5
        });
      });
    }

    // Interactive hover effects
    function initHoverEffects() {
      const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
      
      heroButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // Phone mockup hover effect
      const phoneMockup = document.querySelector('.phone-mockup');
      if (phoneMockup) {
        phoneMockup.addEventListener('mouseenter', () => {
          gsap.to(phoneMockup, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        phoneMockup.addEventListener('mouseleave', () => {
          gsap.to(phoneMockup, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }
    }

    // Parallax effect for background elements
    function initParallaxEffect() {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.shape, .floating-card');
        
        parallaxElements.forEach((element, index) => {
          const speed = 0.5 + (index * 0.1);
          const yPos = -(scrolled * speed);
          gsap.set(element, { y: yPos });
        });
      });
    }

    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Enhanced Scroll-triggered animations for all sections
    function initScrollAnimations() {
      // Animate section titles
      gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // Animate problem cards
      gsap.utils.toArray('.problem-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out'
        });
      });

      // Animate feature cards
      gsap.utils.toArray('.feature-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out'
        });
      });

      // Animate user cards
      gsap.utils.toArray('.user-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out'
        });
      });

      // Animate competition cards
      gsap.utils.toArray('.competition-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out'
        });
      });

      // Animate benefit items
      gsap.utils.toArray('.benefit-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: -50,
          duration: 0.8,
          delay: index * 0.3,
          ease: 'power2.out'
        });
      });

      // Animate hero elements on scroll
      gsap.utils.toArray('.hero-stats, .hero-features, .floating-elements').forEach(element => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // Parallax effect for hero background
      gsap.to('.hero-background', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -100,
        ease: 'none'
      });
    }

    // Update on scroll
    function updateOnScroll() {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    }

    // Initialize walking buses
    function initWalkingBuses() {
      const busIcons = ['🚌', '🚌', '🚌', '🚌'];
      const positions = [
        { top: '20%', left: '-50px' },
        { top: '40%', right: '-50px' },
        { top: '60%', left: '-50px' },
        { top: '80%', right: '-50px' }
      ];

      busIcons.forEach((icon, index) => {
        const bus = document.createElement('div');
        bus.className = `walking-bus walking-bus-${index + 1}`;
        bus.innerHTML = `<i class="fas fa-bus"></i>`;
        bus.style.cssText = `
          position: absolute;
          font-size: 2rem;
          color: var(--primary-blue);
          z-index: 10;
          opacity: 0.8;
          animation: walkBus 8s linear infinite;
          pointer-events: none;
          ${positions[index].top ? `top: ${positions[index].top};` : ''}
          ${positions[index].left ? `left: ${positions[index].left};` : ''}
          ${positions[index].right ? `right: ${positions[index].right};` : ''}
          ${index % 2 === 1 ? 'animation-direction: reverse;' : ''}
          animation-delay: ${index * 2}s;
        `;

        document.body.appendChild(bus);
      });
    }

    // Bus trail effect
    function createBusTrail() {
      const buses = document.querySelectorAll('.walking-bus');

      buses.forEach(bus => {
        // Create a subtle trail effect
        const trail = document.createElement('div');
        trail.innerHTML = '<i class="fas fa-bus"></i>';
        trail.style.cssText = `
            position: absolute;
            font-size: 1rem;
            color: var(--primary-blue);
            opacity: 0.3;
            pointer-events: none;
            z-index: 5;
        `;

        bus.appendChild(trail);

        // Animate trail
        gsap.to(trail, {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: 'power2.out',
          repeat: -1,
          repeatDelay: 2
        });
      });
    }

    // Theme toggle logic
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function setTheme(dark) {
      if (dark) {
        document.body.classList.add('dark-mode');
        if (themeIcon) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        if (themeIcon) {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'light');
      }
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        setTheme(!isDark);
      });
    }

    // On load, set theme from localStorage or system preference
    (function () {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setTheme(true);
      } else if (savedTheme === 'light') {
        setTheme(false);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(true);
      } else {
        setTheme(false);
      }
    })();

    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      // Ensure all animations are properly initialized
      ScrollTrigger.refresh();

      // Initialize enhanced animations
      initHeroAnimations();
      initFloatingAnimations();
      initHoverEffects();
      initParallaxEffect();
      initScrollAnimations();

      // Initialize walking buses
      initWalkingBuses();
      createBusTrail();

      // Add loading state
      document.body.style.opacity = '0';
      gsap.to(document.body, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    // Add scroll event listener
    window.addEventListener('scroll', updateOnScroll);
  }, []);
};

export default useAnimations;
