import { ExternalLink, Star } from 'lucide-react';
import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePrefetchOnHover } from '@/hooks/usePrefetchOnHover';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { handleMouseEnter, handleMouseLeave } = usePrefetchOnHover(project.url);

  return (
    <Card className="h-full overflow-hidden border hover:shadow-lg transition-shadow duration-300 bg-card">
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 rounded-full">
            <Star className="w-3 h-3 mr-1" />
            Destacado
          </Badge>
        </div>
      )}

      {/* Project Visual */}
      <div className="relative h-48 bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <span className="text-2xl font-bold text-primary">
              {project.name.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 group">
          <Button
            size="sm"
            className="bg-background text-primary font-semibold hover:bg-background/90"
            asChild
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ExternalLink className="w-4 h-4" />
              Ver proyecto
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Tecnologías
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge 
                key={tech}
                variant="secondary" 
                className="text-xs px-2 py-1"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-6 pt-0">
        <Button
          variant="outline"
          className="w-full"
          asChild
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Ver proyecto</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;