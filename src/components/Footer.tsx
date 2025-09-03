import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin, Coffee } from 'lucide-react';
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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/felipedela1', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/felipedelacruzgozalbes', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:felipedelacruzgoon@gmail.com', label: 'Email', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Felipe de la Cruz
                </h3>
                <p className="text-blue-200 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creando experiencias digitales excepcionales con pasión y precisión. 
              Siempre aprendiendo, siempre innovando.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Navegación</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>España • Trabajo Remoto</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span>felipedelacruzgoon@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-400" />
                <span>Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Sígueme</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 transform`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Felipe de la Cruz. Todos los derechos reservados.
            </p>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <span className="mr-2">Volver arriba</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </div>

        {/* Tech Stack Credit */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-xs text-gray-400">
            Construido con React, TypeScript, Tailwind CSS • 
            <span className="text-blue-400">Optimizado para rendimiento</span> y 
            <span className="text-purple-400">accesibilidad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;