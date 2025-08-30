import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

const RestaurantHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-restaurant-dark/80 via-restaurant-dark/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-restaurant-gold/20 backdrop-blur-sm border border-restaurant-gold/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-restaurant-gold fill-current" />
              <span className="text-restaurant-gold font-medium font-inter">Authentic Italian Cuisine</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight">
              Welcome to
              <span className="block text-restaurant-gold">Bella Vista</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl font-inter leading-relaxed">
              Experience the authentic flavors of Italy with our traditional recipes, 
              fresh ingredients, and warm hospitality in an elegant atmosphere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                variant="restaurant"
                className="px-8 py-6 text-lg font-semibold font-inter shadow-xl hover:shadow-2xl"
              >
                View Our Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold font-inter"
              >
                Reserve a Table
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-white/80 font-inter">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Open Daily 5PM - 11PM</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-restaurant-gold fill-current" />
                ))}
                <span className="ml-2">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Featured Items Preview */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white font-playfair mb-6">Today's Specials</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <div>
                    <h4 className="font-semibold text-white font-inter">Osso Buco alla Milanese</h4>
                    <p className="text-white/70 text-sm">Braised veal shanks with saffron risotto</p>
                  </div>
                  <span className="text-restaurant-gold font-bold">$42</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <div>
                    <h4 className="font-semibold text-white font-inter">Linguine alle Vongole</h4>
                    <p className="text-white/70 text-sm">Fresh clams with white wine and garlic</p>
                  </div>
                  <span className="text-restaurant-gold font-bold">$28</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <h4 className="font-semibold text-white font-inter">Tiramisu della Casa</h4>
                    <p className="text-white/70 text-sm">Traditional mascarpone dessert</p>
                  </div>
                  <span className="text-restaurant-gold font-bold">$12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
};

export default RestaurantHero;