import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const MenuPreview = () => {
  const menuCategories = [
    {
      name: 'Starters',
      description: 'Begin your culinary journey',
      items: [
        { name: 'Bruschetta Classica', description: 'Toasted bread with fresh tomatoes, basil and garlic', price: '$12' },
        { name: 'Antipasto Misto', description: 'Selection of cured meats, cheeses and olives', price: '$18' },
        { name: 'Carpaccio di Manzo', description: 'Thinly sliced beef with arugula and parmesan', price: '$16' }
      ]
    },
    {
      name: 'Main Course',
      description: 'Authentic Italian classics',
      items: [
        { name: 'Risotto ai Porcini', description: 'Creamy arborio rice with wild mushrooms', price: '$28' },
        { name: 'Pasta alla Carbonara', description: 'Traditional Roman pasta with eggs and pancetta', price: '$24' },
        { name: 'Branzino in Crosta', description: 'Sea bass in herb crust with roasted vegetables', price: '$34' }
      ]
    },
    {
      name: 'Desserts',
      description: 'Sweet endings to perfection',
      items: [
        { name: 'Tiramisu', description: 'Classic coffee-flavored dessert with mascarpone', price: '$10' },
        { name: 'Panna Cotta', description: 'Silky vanilla custard with berry compote', price: '$9' },
        { name: 'Cannoli Siciliani', description: 'Crispy shells filled with sweet ricotta', price: '$8' }
      ]
    },
    {
      name: 'Beverages',
      description: 'Carefully curated selection',
      items: [
        { name: 'Chianti Classico', description: 'Premium Tuscan red wine', price: '$45' },
        { name: 'Prosecco di Valdobbiadene', description: 'Sparkling wine from Veneto region', price: '$35' },
        { name: 'Espresso Romano', description: 'Traditional Italian coffee with lemon twist', price: '$5' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-restaurant-cream/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-restaurant-dark mb-4">
            Our Signature Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Discover authentic Italian flavors crafted with the finest ingredients and traditional techniques passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => (
            <Card 
              key={category.name} 
              className="group hover:shadow-lg transition-all duration-300 border-restaurant-cream animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-playfair text-restaurant-dark mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm">
                    {category.description}
                  </p>
                  <div className="w-12 h-px bg-restaurant-gold mx-auto mt-4"></div>
                </div>

                <div className="space-y-4 mb-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-restaurant-cream/50 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-restaurant-dark font-inter text-sm">
                          {item.name}
                        </h4>
                        <span className="text-restaurant-red font-bold text-sm ml-2 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-xs font-inter leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-restaurant-red group-hover:text-white group-hover:border-restaurant-red transition-all duration-300 font-inter"
                >
                  View Full {category.name}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="restaurant"
            className="px-10 py-6 text-lg font-semibold font-inter shadow-xl hover:shadow-2xl"
          >
            View Complete Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;