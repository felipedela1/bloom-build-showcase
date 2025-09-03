import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Proyectos', href: '#projects' },
    { label: 'Tecnologías', href: '#tech' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Contacto', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="noise" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Portfolio Hub</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Desarrollo frontend profesional con tecnologías modernas. 
              Creando experiencias web que conectan y inspiran.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Navegación</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-smooth"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📍 España • Trabajo Remoto</p>
              <p>📧 contact@example.com</p>
              <p>💼 Disponible para proyectos</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
            <span>© {currentYear} Portfolio Hub. Hecho con</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>y tecnología moderna.</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-smooth"
          >
            <span className="mr-2">Volver arriba</span>
            <motion.div
              className="transition-transform duration-smooth group-hover:-translate-y-1"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </Button>
        </motion.div>

        {/* Tech Stack Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 pt-8 border-t border-primary-foreground/20"
        >
          <p className="text-xs text-primary-foreground/60">
            Construido con React, TypeScript, Tailwind CSS y Framer Motion • 
            Optimizado para rendimiento y accesibilidad
          </p>
        </motion.div>
      </div>

      {/* Floating Action Button - Quick Contact */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <Button
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent-hover shadow-lg hover:shadow-xl transition-all duration-smooth"
          asChild
        >
          <a 
            href="mailto:contact@example.com"
            aria-label="Contacto rápido"
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              💬
            </motion.div>
          </a>
        </Button>
      </motion.div>
    </footer>
  );
};

export default Footer;