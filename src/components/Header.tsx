import { Linkedin, Mail, Github, Code } from 'lucide-react';

const Header = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/felipedela1', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/felipedelacruzgozalbes', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:felipedelacruzgoon@gmail.com', label: 'Email', color: 'hover:text-red-500' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with gradient */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Felipe de la Cruz
                </h1>
                <p className="text-xs text-gray-600 font-medium">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="flex items-center space-x-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 ${social.color} transition-all duration-300 font-medium hover:bg-gray-50 hover:shadow-md transform hover:scale-105`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </header>
  );
};

export default Header;
