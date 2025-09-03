import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FuturisticBackground from '@/components/FuturisticBackground';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Futuristic Background */}
      <FuturisticBackground />

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full glow animate-neon-flicker"
        animate={{
          y: [0, -30, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full glow"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent rounded-full opacity-80"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-accent/30 text-sm text-foreground glow animate-glow-pulse"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="font-medium glow-text">Portfolio Futurista</span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black tracking-tight"
          >
            <motion.span
              className="block text-foreground glow-text"
              animate={{ textShadow: ["0 0 10px hsl(210 100% 56% / 0.8)", "0 0 20px hsl(210 100% 56% / 0.8)", "0 0 10px hsl(210 100% 56% / 0.8)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              CYBER
            </motion.span>
            <motion.span
              className="block bg-gradient-accent bg-clip-text text-transparent animate-gradient-shift"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ backgroundSize: "200% 200%" }}
            >
              DEVELOPMENT
            </motion.span>
            <motion.span 
              className="text-muted-foreground text-3xl md:text-5xl font-light tracking-widest"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              [PORTFOLIO.EXE]
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-xl md:text-2xl text-accent font-medium">
              {'>> '}Inicializando experiencias digitales avanzadas...
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Desarrollo frontend de próxima generación con arquitecturas reactivas,
              interfaces neuromórficas y experiencias inmersivas.
            </p>
            <motion.div
              className="flex items-center justify-center gap-2 text-sm text-accent font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>[STATUS]</span>
              <span className="text-primary">●</span>
              <span>ONLINE & OPTIMIZADO</span>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToProjects}
                className="group relative overflow-hidden bg-gradient-primary hover:bg-gradient-accent transition-all duration-smooth px-10 py-4 text-lg font-bold rounded-lg glow animate-glow-pulse border border-accent/50"
              >
                <motion.span 
                  className="relative z-10 flex items-center gap-3"
                  animate={{ 
                    textShadow: ["0 0 5px hsl(210 100% 56% / 0.5)", "0 0 10px hsl(210 100% 56% / 0.8)", "0 0 5px hsl(210 100% 56% / 0.5)"] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code2 className="w-6 h-6" />
                  [EXPLORAR_PROYECTOS]
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-smooth"
                  whileHover={{ 
                    background: ["linear-gradient(45deg, hsl(189 100% 56% / 0.2), hsl(210 100% 56% / 0.2))", 
                               "linear-gradient(45deg, hsl(210 100% 56% / 0.2), hsl(189 100% 56% / 0.2))"] 
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="group glass border-accent/30 hover:border-accent/50 hover:bg-accent/10 px-10 py-4 text-lg font-bold rounded-lg transition-all duration-smooth"
                asChild
              >
                <a href="#about" className="flex items-center gap-3">
                  <span className="font-mono">[INFO_PERSONAL]</span>
                  <motion.div
                    animate={{ x: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-accent"
                  >
                    ▶
                  </motion.div>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <motion.div
            animate={{
              y: [0, 15, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-3 text-accent hover:text-primary transition-colors duration-smooth group"
          >
            <motion.span 
              className="text-sm font-mono font-bold tracking-wider"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [SCROLL_DOWN]
            </motion.span>
            <motion.div
              className="relative"
              animate={{ 
                boxShadow: ["0 0 10px hsl(189 100% 56% / 0.5)", "0 0 20px hsl(189 100% 56% / 0.8)", "0 0 10px hsl(189 100% 56% / 0.5)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-smooth" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;