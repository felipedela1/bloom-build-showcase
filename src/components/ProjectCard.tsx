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
      <Card className="relative h-full overflow-hidden glass border border-accent/20 hover:border-accent/40 transition-all duration-smooth bg-gradient-card glow-pulse animate-glow-pulse hover:animate-none">
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="absolute top-4 right-4 z-10"
          >
            <Badge className="bg-gradient-accent text-background font-bold px-4 py-2 rounded-full shadow-lg glow animate-neon-flicker border border-accent/50">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 mr-1" />
              </motion.div>
              [DESTACADO]
            </Badge>
          </motion.div>
        )}

        {/* Enhanced Project Visual */}
        <div className="relative h-48 bg-gradient-to-br from-background to-card overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-primary opacity-30 animate-hologram"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center shadow-lg glow border-2 border-accent/30"
              whileHover={{ 
                scale: 1.2, 
                rotate: 15,
                boxShadow: "0 0 30px hsl(189 100% 56% / 0.8)" 
              }}
              transition={{ duration: 0.3, type: "spring" }}
              animate={{
                boxShadow: ["0 0 20px hsl(189 100% 56% / 0.4)", "0 0 30px hsl(189 100% 56% / 0.6)", "0 0 20px hsl(189 100% 56% / 0.4)"]
              }}
            >
              <motion.span 
                className="text-3xl font-black text-background"
                animate={{ 
                  textShadow: ["0 0 5px hsl(189 100% 56%)", "0 0 10px hsl(189 100% 56%)", "0 0 5px hsl(189 100% 56%)"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {project.name.charAt(0)}
              </motion.span>
            </motion.div>
          </div>
          
          {/* Cyber grid overlay */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-accent/10 to-primary/10" />
          
          {/* Enhanced Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-smooth"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <Button
                size="sm"
                className="bg-background text-accent font-bold hover:bg-background/90 border border-accent/50 glow px-6 py-3"
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
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-mono">[ACCEDER]</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <motion.h3 
              className="text-xl font-black text-foreground group-hover:text-accent transition-colors duration-smooth"
              whileHover={{ 
                textShadow: "0 0 10px hsl(189 100% 56% / 0.8)",
                scale: 1.02
              }}
            >
              {project.name}
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed line-clamp-2 font-medium">
              {project.description}
            </p>
          </div>

          {/* Enhanced Technologies */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest font-mono">
              [TECH_STACK]
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
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-bold px-3 py-1 bg-secondary hover:bg-accent hover:text-background transition-all duration-300 border border-accent/30 font-mono"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs font-mono border-accent/30 text-accent">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Action */}
        <div className="p-6 pt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="w-full group/btn border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-smooth font-mono font-bold text-sm glow-pulse"
              asChild
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>[VER_PROYECTO]</span>
                <motion.div
                  animate={{ 
                    x: [0, 3, 0],
                    opacity: [0.7, 1, 0.7] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;