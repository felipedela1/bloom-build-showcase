import React, { useEffect, useState, useRef } from 'react';
import { projects } from '@/data/projects';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Code2, Users, Zap } from 'lucide-react';

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const apiRef = useRef<CarouselApi>(null);

  useEffect(() => {
    if (apiRef.current) {
      apiRef.current.scrollTo(3, false);
    }
  }, []);

  const getItemClass = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'carousel-item-active';
    if (Math.abs(diff) === 1) return diff < 0 ? 'carousel-item-prev' : 'carousel-item-next';
    if (Math.abs(diff) === 2) return diff < 0 ? 'carousel-item-prev-2' : 'carousel-item-next-2';
    return 'carousel-item';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Code2 className="w-4 h-4" />;
      case 'ecommerce': return <Users className="w-4 h-4" />;
      case 'healthcare': return <Star className="w-4 h-4" />;
      case 'crm': return <Zap className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Enhanced title section */}
      <div className="text-center mb-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 left-20 w-12 h-12 bg-pink-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Main badge with enhanced styling */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-full border-2 border-blue-200/50 mb-8 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="relative">
            <Star className="w-6 h-6 text-blue-600 animate-spin" style={{animationDuration: '3s'}} />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm"></div>
          </div>
          <span className="text-sm font-semibold text-blue-700 tracking-wide">Portfolio de APPS</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Main title with enhanced effects */}
        <div className="relative mb-6">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2 animate-fade-in-up">
            Proyectos
          </h2>
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-800 via-pink-600 to-blue-800 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            de Muestra
          </h2>
          {/* Decorative underline */}
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Subtitle with enhanced styling */}
        <div className="relative">
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Explora mis trabajos más recientes, donde combino{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              creatividad
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
              tecnología
            </span>
            {' '}y{' '}
            <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent font-bold">
              soluciones prácticas.
            </span>
          </p>
        </div>
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
          startIndex: 3,
        }}
        setApi={(api) => {
          apiRef.current = api;
          if (api) {
            api.on('select', () => {
              setCurrentIndex(api.selectedScrollSnap());
            });
          }
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 carousel-viewport">
          {projects.map((project, index) => (
            <CarouselItem key={project.id} className={`pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-2/5 carousel-item ${getItemClass(index)}`}>
              <div className="p-2">
                <Card className="h-full group relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm border-2 border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  {/* Simple gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[-1]"></div>
                  
                  {/* Simple border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-300 pointer-events-none z-[-1]"></div>
                  
                  <CardContent className="p-8 relative z-10 text-center">
                    {/* CTA Button - Moved to top */}
                    <Button 
                      asChild 
                      className="w-full mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                        <span>Ver Proyecto</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                                    {/* Image with enhanced styling */}
                    <div className="aspect-video mb-6 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 border-4 border-white/50">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <div className="space-y-6">
                      {/* Title with gradient */}
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300 leading-tight">
                        {project.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-base font-medium">
                        {project.detailedDescription}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 flex items-center justify-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          Características
                        </h4>
                        <ul className="space-y-2 text-left">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-800 font-medium">
                              <span className="text-blue-500 mr-3 text-base flex-shrink-0 mt-0.5">✦</span>
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technical Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 flex items-center justify-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          Características Técnicas
                        </h4>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {project.hasDatabase && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full border border-green-200 shadow-sm">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm font-semibold">Base de Datos</span>
                            </div>
                          )}
                          {project.hasLogin && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full border border-blue-200 shadow-sm">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-sm font-semibold">Sistema de Login</span>
                            </div>
                          )}
                          {project.hasRoles && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 px-4 py-2 rounded-full border border-purple-200 shadow-sm">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-sm font-semibold">Roles y Permisos</span>
                            </div>
                          )}
                          {project.hasStockControl && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              <span className="text-sm font-semibold">Control de Stock</span>
                            </div>
                          )}
                          {project.hasAppointmentScheduling && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 px-4 py-2 rounded-full border border-rose-200 shadow-sm">
                              <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                              <span className="text-sm font-semibold">Citas por Disponibilidad</span>
                            </div>
                          )}
                          {!project.hasDatabase && !project.hasLogin && !project.hasRoles && !project.hasStockControl && !project.hasAppointmentScheduling && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                              <span className="text-sm font-semibold">Demo Estática</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Enhanced navigation buttons */}
        <CarouselPrevious className="left-4 bg-white/90 hover:bg-white shadow-2xl border-2 border-blue-200/50 h-16 w-16 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 rounded-full" />
        <CarouselNext className="right-4 bg-white/90 hover:bg-white shadow-2xl border-2 border-blue-200/50 h-16 w-16 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 rounded-full" />
      </Carousel>
      
      {/* Enhanced indicators */}
      <div className="flex justify-center mt-12 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              apiRef.current?.scrollTo(index);
              setCurrentIndex(index);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
