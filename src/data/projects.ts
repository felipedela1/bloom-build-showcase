export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  image?: string;
  technologies: string[];
  category: 'web' | 'ecommerce' | 'healthcare' | 'crm' | 'creative';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'crm-modular',
    name: 'CRM Modular',
    description: 'Sistema CRM completo con módulos personalizables para gestión empresarial integral',
    url: 'https://crmmodular.netlify.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    category: 'crm',
    featured: true
  },
  {
    id: 'lucero-care',
    name: 'Lucero Care',
    description: 'Plataforma de salud digital con gestión de citas y expedientes médicos',
    url: 'https://lucerocare.netlify.app/inicio',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    category: 'healthcare',
    featured: true
  },
  {
    id: 'hc-eco-hub',
    name: 'HC Eco Hub',
    description: 'Hub ecológico para sostenibilidad empresarial y certificaciones ambientales',
    url: 'https://hc-eco-hub.netlify.app/',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Lucide React', 'React Query'],
    category: 'web',
    featured: true
  },
  {
    id: 'obrador-dlui',
    name: 'Obrador d\'Lui',
    description: 'E-commerce artesanal con catálogo dinámico y sistema de pedidos personalizado',
    url: 'https://obradordlui.netlify.app/',
    technologies: ['React', 'Stripe', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    category: 'ecommerce'
  },
  {
    id: 'webgrams',
    name: 'WebGrams',
    description: 'Plataforma de análisis web con métricas avanzadas y reportes automatizados',
    url: 'https://webgrams.netlify.app/',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'React Query', 'Recharts'],
    category: 'web'
  },
  {
    id: 'africa-cruz',
    name: 'África de la Cruz',
    description: 'Portfolio artístico con galería interactiva y gestión de obras creativas',
    url: 'https://africadelacruz.netlify.app/',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Lightbox'],
    category: 'creative'
  }
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

export const categories = {
  web: 'Desarrollo Web',
  ecommerce: 'E-commerce',
  healthcare: 'Salud Digital',
  crm: 'Sistemas CRM',
  creative: 'Portfolio Creativo'
};