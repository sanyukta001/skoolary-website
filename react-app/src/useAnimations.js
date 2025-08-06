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

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      const isDark = document.body.classList.contains('dark-mode');
      if (window.scrollY > 100) {
        if (isDark) {
          navbar.style.background = 'rgba(24, 28, 31, 0.98)';
          navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
      } else {
        if (isDark) {
          navbar.style.background = 'rgba(24, 28, 31, 0.95)';
          navbar.style.boxShadow = 'none';
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          navbar.style.boxShadow = 'none';
        }
      }
    });

    // Hero section animations
    gsap.timeline()
      .from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      })
      .from('.hero-description', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.hero-buttons', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.phone-mockup', {
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.floating-shapes .shape', {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
        stagger: 0.2
      }, '-=1');

    // Animate tracking dots
    const dots = document.querySelectorAll('.dot');
    let currentDot = 0;

    function animateDots() {
      dots.forEach((dot, index) => {
        dot.classList.remove('active');
      });
      dots[currentDot].classList.add('active');
      currentDot = (currentDot + 1) % dots.length;
    }

    setInterval(animateDots, 2000);

    // Scroll-triggered animations
    gsap.utils.toArray('[data-aos]').forEach(element => {
      gsap.fromTo(element,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax effect for floating shapes
    gsap.to('.shape-1', {
      y: -50,
      x: 30,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.shape-2', {
      y: -30,
      x: -20,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.shape-3', {
      y: -40,
      x: 40,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Card hover effects
    document.querySelectorAll('.problem-card, .feature-card, .user-card, .competition-card').forEach(card => {
      card.addEventListener('mouseenter', function () {
        gsap.to(this, {
          duration: 0.3,
          y: -10,
          scale: 1.02,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', function () {
        gsap.to(this, {
          duration: 0.3,
          y: 0,
          scale: 1,
          ease: 'power2.out'
        });
      });
    });

    // Button hover effects
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
      button.addEventListener('mouseenter', function () {
        gsap.to(this, {
          duration: 0.3,
          scale: 1.05,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', function () {
        gsap.to(this, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out'
        });
      });
    });

    // Benefit items slide animation
    gsap.utils.toArray('.benefit-item').forEach((item, index) => {
      gsap.fromTo(item,
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.2
        }
      );
    });

    // Phone mockup animation
    gsap.to('.phone-mockup', {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    // Bus icon movement
    gsap.to('.bus-icon', {
      y: -5,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    // Route line animation
    gsap.fromTo('.route-line',
      {
        scaleY: 0,
        transformOrigin: 'top'
      },
      {
        scaleY: 1,
        duration: 2,
        ease: 'power2.out',
        delay: 1
      }
    );

    // Counter animation for numbers
    function animateCounters() {
      const counters = document.querySelectorAll('.problem-number, .benefit-number');

      counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current).toString().padStart(2, '0');
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString().padStart(2, '0');
          }
        };

        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          onEnter: updateCounter
        });
      });
    }

    // Initialize counter animations
    animateCounters();

    // Interactive particle system
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (particles) {
        gsap.to(particles.rotation, {
          x: mouseY * 0.5,
          y: mouseX * 0.5,
          duration: 1,
          ease: 'power2.out'
        });
      }
    });

    // Window resize handler
    window.addEventListener('resize', () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    });

    // Loading animation
    window.addEventListener('load', () => {
      gsap.to('.hero-content', {
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out'
      });
    });

    // Mobile menu toggle
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.contains('active');

        if (isActive) {
          gsap.to(navMenu, {
            duration: 0.3,
            opacity: 0,
            y: -20,
            ease: 'power2.out',
            onComplete: () => {
              navMenu.style.display = 'none';
            }
          });
        } else {
          navMenu.style.display = 'flex';
          gsap.to(navMenu, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: 'power2.out'
          });
        }
      });
    }

    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            display: none;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            display: flex;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
    document.head.appendChild(style);

    // Performance optimization
    let ticking = false;

    function updateOnScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update any scroll-based animations here
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', updateOnScroll);

    // Walking bus animations
    function initWalkingBuses() {
      const buses = document.querySelectorAll('.walking-bus');

      buses.forEach((bus, index) => {
        // Add random variations to bus animations
        const randomDelay = Math.random() * 4;
        const randomSpeed = 6 + Math.random() * 4; // 6-10 seconds

        gsap.set(bus, {
          animationDelay: `${randomDelay}s`,
          animationDuration: `${randomSpeed}s`
        });

        // Add hover effect to buses
        bus.addEventListener('mouseenter', () => {
          gsap.to(bus, {
            scale: 1.2,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        bus.addEventListener('mouseleave', () => {
          gsap.to(bus, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
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
  }, []);
};

export default useAnimations;
