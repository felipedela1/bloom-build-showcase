import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FuturisticBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 3 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 6) + 's';

      particlesRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 10000);
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(createParticle, Math.random() * 2000);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 grid-pattern animate-cyber-grid opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />

      {/* Gradient Overlays */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      <div ref={particlesRef} className="particles" />

      {/* Cyber Lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-primary to-transparent opacity-30"
        animate={{
          x: ['100%', '-100%'],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-radial from-accent/20 to-transparent blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-gradient-radial from-primary/30 to-transparent blur-lg"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Holographic Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-primary/5 animate-hologram"
        style={{
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
};

export default FuturisticBackground;