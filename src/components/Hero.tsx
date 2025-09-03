import { ArrowDown, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm text-foreground">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="font-medium">Portfolio Profesional</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">
              Desarrollo
            </span>
            <span className="block text-primary">
              Frontend
            </span>
            <span className="text-muted-foreground text-2xl md:text-3xl font-normal">
              Moderno & Profesional
            </span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creando experiencias web excepcionales con tecnologías modernas
              y diseño centrado en el usuario.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToProjects}
              className="px-8 py-3 text-base font-semibold"
            >
              <Code2 className="w-5 h-5 mr-2" />
              Ver Proyectos
            </Button>

            <Button
              variant="outline"
              className="px-8 py-3 text-base font-semibold"
              asChild
            >
              <a href="#about">
                Sobre mí
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;