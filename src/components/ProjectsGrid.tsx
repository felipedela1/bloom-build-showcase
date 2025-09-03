import { useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  // Featured projects first, then others
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-foreground">Proyectos</span>
            <span className="block text-primary">Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Una selección de mis trabajos más recientes y destacados,
            desarrollados con las últimas tecnologías frontend.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;