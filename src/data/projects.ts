export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  features: string[];
  url: string;
  image: string;
  technologies: string[];
  category: 'web' | 'ecommerce' | 'healthcare' | 'crm' | 'creative';
  featured?: boolean;
  hasDatabase?: boolean;
  hasLogin?: boolean;
  hasRoles?: boolean;
  hasStockControl?: boolean;
  hasAppointmentScheduling?: boolean;
}

export const projects: Project[] = [
  {
    id: 'crm-modular',
    name: 'CRM Modular',
    description: 'Sistema CRM completo con módulos personalizables para gestión empresarial integral',
    detailedDescription: 'Una solución CRM completa diseñada para empresas que necesitan gestionar clientes, ventas y operaciones de manera eficiente. El sistema incluye módulos especializados que se adaptan a diferentes sectores empresariales.',
    features: [
      'Sistema de autenticación seguro con roles y permisos',
      'Gestión completa de clientes y contactos',
      'Panel de ventas con seguimiento de oportunidades',
      'Sistema de reservas y citas integrado',
      'Control de inventario y stock en tiempo real',
      'Dashboard personalizable por roles de usuario',
      'Reportes avanzados y analíticas',
      'API REST para integraciones externas'
    ],
    url: 'https://crmmodular.netlify.app/',
    image: '/modularCRM.png',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    category: 'crm',
    featured: true,
    hasLogin: true,
    hasRoles: true
  },
  {
    id: 'hc-eco-hub',
    name: 'HC Asesoría',
    description: 'Hub de asesoría empresarial con gestión de servicios y certificaciones',
    detailedDescription: 'Plataforma especializada en asesoría empresarial que centraliza la gestión de servicios profesionales, desde consultoría hasta certificaciones empresariales.',
    features: [
      'Portal de clientes con autenticación segura',
      'Sistema de gestión de servicios de asesoría',
      'Calendario de citas y consultas empresariales',
      'Gestión documental para certificaciones',
      'Dashboard ejecutivo con KPIs empresariales',
      'Sistema de seguimiento de proyectos',
      'Módulo de facturación y reportes financieros',
      'Panel administrativo completo'
    ],
    url: 'https://hc-eco-hub.netlify.app/',
    image: '/hcasesoria.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Lucide React', 'React Query'],
    category: 'web',
    featured: true
  },

  {
    id: 'webgrams',
    name: 'WebGrams',
    description: 'Plataforma de análisis web con métricas avanzadas y reportes automatizados',
    detailedDescription: 'Landing page para consultoría de desarrollo web y marketing digital, enfocada en atraer clientes mediante un diseño moderno y profesional.',
    features: [
      'Dashboard de análisis con autenticación',
      'Métricas de rendimiento web en tiempo real',
      'Sistema de reportes automatizados',
      'Gestión de múltiples sitios web',
      'Visualización de datos con gráficos interactivos',
      'Alertas y notificaciones personalizables',
      'Exportación de reportes en múltiples formatos',
      'API para integraciones con otras herramientas'
    ],
    url: 'https://webgrams.netlify.app/',
    image: '/WebGrams.png',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'React Query', 'Recharts'],
    category: 'web'
  },
    {
    id: 'obrador-dlui',
    name: 'Obrador d\'Lui',
    description: 'E-commerce artesanal con catálogo dinámico y sistema de pedidos personalizado',
    detailedDescription: 'Tienda online especializada en productos artesanales con un enfoque en la experiencia de usuario y la gestión eficiente de inventario y pedidos.',
    features: [
      'Sistema de autenticación para clientes y administradores',
      'Catálogo de productos con búsqueda avanzada',
      'Carrito de compras con persistencia',
      'Sistema de reservas para productos personalizados',
      'Control de stock e inventario en tiempo real',
      'Panel de administración con gestión de productos',
      'Procesamiento de pagos con Stripe',
      'Sistema de pedidos y seguimiento de envíos'
    ],
    url: 'https://obradordlui.netlify.app/',
    image: '/Obrador.png',
    technologies: ['React', 'Stripe', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    hasDatabase: true,
    hasLogin: true,
    hasRoles: true,
    hasStockControl: true,
    category: 'ecommerce'
  },
  {
    id: 'lucero-care',
    name: 'Cuidadora',
    description: 'Plataforma de salud digital con gestión de citas y expedientes médicos',
    detailedDescription: 'Plataforma integral de salud digital que digitaliza y optimiza los procesos médicos. Diseñada para clínicas y consultorios que buscan modernizar su gestión administrativa y clínica.',
    features: [
      'Sistema de login diferenciado para médicos, pacientes y administradores',
      'Gestión completa de expedientes médicos electrónicos',
      'Sistema de reservas de citas con calendario interactivo',
      'Control de acceso basado en roles (médico, paciente, admin)',
      'Histórico médico completo y búsquedas avanzadas',
      'Sistema de notificaciones automáticas',
      'Dashboard médico con métricas y estadísticas',
      'Cumplimiento con normativas de privacidad médica'
    ],
    url: 'https://cuidadora.netlify.app/inicio',
    image: '/lucerocare.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    category: 'healthcare',
    featured: true,
    hasDatabase: true,
    hasLogin: true,
    hasRoles: true,
    hasAppointmentScheduling: true
  },
  {
    id: 'africa-cruz',
    name: 'África de la Cruz',
    description: 'Portfolio artístico con galería interactiva y gestión de obras creativas',
    detailedDescription: 'Portfolio digital para artistas que combina una galería visual impactante con herramientas de gestión para obras y exposiciones.',
    features: [
      'Galería interactiva con visualización de alta calidad',
      'Sistema de categorización de obras por técnica/tema',
      'Panel de administración para gestión de portfolio',
      'Sistema de contacto integrado',
      'Optimización SEO para visibilidad online',
      'Diseño responsive para todos los dispositivos',
      'Lightbox avanzado para visualización de obras',
      'Integración con redes sociales'
    ],
    url: 'https://africadelacruz.netlify.app/',
    image: '/Africaweb.png',
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