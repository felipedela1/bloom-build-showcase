import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Code2, Zap, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Code2, label: 'Proyectos Completados', value: '6+' },
    { icon: Zap, label: 'Tecnologías Dominadas', value: '15+' },
    { icon: Users, label: 'Experiencia en UX', value: '3 años' },
    { icon: Award, label: 'Lighthouse Score', value: '95+' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-slate-600' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com', color: 'hover:text-green-600' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Sobre
            <span className="block text-accent">Mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desarrollador frontend especializado en crear experiencias web modernas 
            y de alto rendimiento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Avatar */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0">
              <motion.div
                className="w-full h-full rounded-full bg-gradient-accent p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-accent">
                  DEV
                </div>
              </motion.div>
              
              {/* Status Indicator */}
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 bg-success rounded-full border-4 border-background shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Personal Info */}
            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-2xl font-bold">Portfolio Developer</h3>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>España • Remoto</span>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                Especializado en React, TypeScript y tecnologías modernas. 
                Enfocado en crear interfaces intuitivas con alta performance 
                y experiencia de usuario excepcional.
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className={`rounded-full p-2 ${social.color} transition-colors duration-smooth`}
                      asChild
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center glass border border-white/10 hover:border-accent/30 transition-all duration-smooth">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-6 h-6 text-accent" />
                    </motion.div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills Highlight */}
            <Card className="p-6 glass border border-white/10">
              <h4 className="font-semibold mb-4 text-accent">Enfoque Principal</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">React & TypeScript</span>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">UI/UX Design</span>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Performance Optimization</span>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center lg:text-left"
            >
              <Button
                className="bg-gradient-primary hover:bg-gradient-accent transition-all duration-smooth px-8 py-3"
                asChild
              >
                <a href="mailto:contact@example.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contactar
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;