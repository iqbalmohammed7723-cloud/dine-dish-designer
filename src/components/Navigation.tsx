import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 animate-fade-in">
            <img src={logo} alt="Bella Vista" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="font-playfair text-2xl font-bold text-restaurant-dark">
                Bella Vista
              </h1>
              <p className="text-sm text-restaurant-gold font-medium">Authentic Italian</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter font-medium transition-colors duration-200 hover:text-restaurant-red ${
                  isActive(item.path)
                    ? 'text-restaurant-red border-b-2 border-restaurant-red pb-1'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-inter">
              <Phone className="w-4 h-4 mr-2" />
              Reserve Table
            </Button>
            <Button variant="restaurant" size="sm" className="font-inter">
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium font-inter transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-restaurant-red bg-restaurant-red/10'
                      : 'text-foreground hover:text-restaurant-red hover:bg-restaurant-red/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full font-inter">
                  <Phone className="w-4 h-4 mr-2" />
                  Reserve Table
                </Button>
                <Button variant="restaurant" className="w-full font-inter">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;