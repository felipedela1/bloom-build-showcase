import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePrefetchOnHover } from '@/hooks/usePrefetchOnHover';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { handleMouseEnter, handleMouseLeave } = usePrefetchOnHover(project.url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card className="relative h-full overflow-hidden glass border border-white/10 hover:border-white/20 transition-all duration-smooth bg-gradient-card">
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="absolute top-4 right-4 z-10"
          >
            <Badge className="bg-accent text-accent-foreground font-medium px-3 py-1 rounded-full shadow-lg">
              <Sparkles className="w-3 h-3 mr-1" />
              Destacado
            </Badge>
          </motion.div>
        )}

        {/* Project Image/Visual */}
        <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-primary opacity-20"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <span className="text-2xl font-bold text-white">
                {project.name.charAt(0)}
              </span>
            </motion.div>
          </div>
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-smooth"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="sm"
                className="bg-white text-primary font-medium hover:bg-white/90"
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
                  Visitar
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-smooth">
              {project.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Tecnologías
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7 + index * 0.1 + techIndex * 0.05
                  }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-medium px-2 py-1 bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                </motion.div>
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
            className="w-full group/btn border-muted hover:border-accent hover:bg-accent/5 transition-all duration-smooth"
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
              <span>Ver Proyecto</span>
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-smooth" />
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;