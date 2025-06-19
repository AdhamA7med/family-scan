
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'الرئيسية', href: '#home', icon: 'fas fa-home' },
    { name: 'من نحن', href: '#about', icon: 'fas fa-users' },
    { name: 'خدماتنا', href: '#services', icon: 'fas fa-stethoscope' },
    { name: 'مميزاتنا', href: '#features', icon: 'fas fa-star' },
    { name: 'آراء العملاء', href: '#testimonials', icon: 'fas fa-comments' },
    { name: 'تواصل معنا', href: '#contact', icon: 'fas fa-phone' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md fixed top-0 w-full z-40">
      <div className="container-max">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-medical-teal rounded-lg flex items-center justify-center">
              <i className="fas fa-hospital-user text-white text-lg sm:text-xl"></i>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-medical-dark">Family Scan</h1>
              <p className="text-xs text-medical-blue hidden sm:block">خدمة فحوصات منزلية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 space-x-reverse">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-medical-blue transition-colors duration-300 font-medium flex items-center space-x-2 space-x-reverse group"
              >
                <i className={`${item.icon} text-sm group-hover:scale-110 transition-transform duration-300`}></i>
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col space-y-1">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-4">
            <nav className="flex flex-col space-y-3 pt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-medical-blue transition-colors duration-300 font-medium py-2 flex items-center space-x-3 space-x-reverse"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`${item.icon} text-medical-blue`}></i>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
