import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
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
        'Portfolio profesional de desarrollo frontend. Proyectos con React, TypeScript, Tailwind CSS y tecnologías modernas. Experiencias web de alto rendimiento.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Portfolio",
      "name": "Portfolio Hub - Desarrollo Frontend",
      "description": "Portfolio profesional de desarrollo frontend con React, TypeScript y tecnologías modernas",
      "url": window.location.href,
      "author": {
        "@type": "Person",
        "name": "Portfolio Developer",
        "jobTitle": "Frontend Developer",
        "knowsAbout": ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Design"]
      },
      "workExample": [
        {
          "@type": "WebApplication",
          "name": "CRM Modular",
          "url": "https://crmmodular.netlify.app/",
          "description": "Sistema CRM completo con módulos personalizables"
        },
        {
          "@type": "WebApplication", 
          "name": "Lucero Care",
          "url": "https://lucerocare.netlify.app/inicio",
          "description": "Plataforma de salud digital"
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
      document.head.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-accent text-accent-foreground px-4 py-2 rounded-md focus-visible"
      >
        Saltar al contenido principal
      </a>

      <main id="main-content">
        <Hero />
        <ProjectsGrid />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
