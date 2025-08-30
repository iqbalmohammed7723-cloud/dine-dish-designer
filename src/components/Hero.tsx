import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, Star } from 'lucide-react';
import heroImage from '@/assets/hero-restaurant.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-restaurant-elegant/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-restaurant-gold/20 backdrop-blur-sm border border-restaurant-gold/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-restaurant-gold" />
            <span className="text-restaurant-gold font-medium">Professional Menu Designer</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Create Beautiful
          <span className="block bg-gradient-to-r from-restaurant-warm to-restaurant-gold bg-clip-text text-transparent">
            Restaurant Menus
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Design professional digital menus for your restaurant with our intuitive builder. 
          No design experience required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-restaurant-warm hover:bg-restaurant-warm/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Menu className="w-5 h-5 mr-2" />
            Start Building Your Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
          >
            View Examples
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center items-center gap-8 text-white/70">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm">Restaurants</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50k+</div>
            <div className="text-sm">Menus Created</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
};

export default Hero;