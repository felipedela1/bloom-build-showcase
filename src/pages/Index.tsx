import { useEffect } from 'react';
import Header from '@/components/Header';
import ProjectCarousel from '@/components/ProjectCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  // SEO and performance optimizations
  useEffect(() => {
    // Update document title
    document.title = 'Portfolio Hub - Desarrollo Frontend Profesional';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Portfolio profesional de desarrollo frontend. Proyectos con React, TypeScript, Tailwind CSS y tecnologías modernas. Sistemas completos con login, reservas, stock y visualización por roles.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Portfolio",
      "name": "Portfolio Hub - Desarrollo Frontend",
      "description": "Portfolio profesional de desarrollo frontend con sistemas completos y tecnologías modernas",
      "url": window.location.href,
      "author": {
        "@type": "Person",
        "name": "Portfolio Developer",
        "jobTitle": "Frontend Developer",
        "knowsAbout": ["React", "TypeScript", "Tailwind CSS", "Node.js", "Sistemas CRM", "E-commerce", "Salud Digital"]
      },
      "workExample": [
        {
          "@type": "WebApplication",
          "name": "CRM Modular",
          "url": "https://crmmodular.netlify.app/",
          "description": "Sistema CRM completo con módulos personalizables, autenticación, reservas, stock y roles"
        },
        {
          "@type": "WebApplication", 
          "name": "Lucero Care",
          "url": "https://cuidadora.netlify.app/inicio",
          "description": "Plataforma de salud digital con gestión de citas, expedientes y control por roles"
        },
        {
          "@type": "WebApplication", 
          "name": "HC Asesoría",
          "url": "https://hc-eco-hub.netlify.app/",
          "description": "Sistema de asesoría empresarial con gestión de servicios y dashboard ejecutivo"
        }
      ]
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-green-400/25 to-teal-400/25 rounded-full blur-xl"></div>
      </div>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg shadow-lg border-2 border-blue-200/50 font-semibold"
      >
        Saltar al contenido principal
      </a>

      <Header />
      
      <main id="main-content" className="pt-24 relative z-10">
        <section id="projects">
          <ProjectCarousel />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
