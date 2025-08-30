import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const menuSections = [
    {
      category: 'Antipasti - Starters',
      items: [
        {
          name: 'Bruschetta della Casa',
          description: 'Grilled bread rubbed with garlic, topped with fresh tomatoes, basil, and extra virgin olive oil',
          price: '$12',
          dietary: ['vegetarian']
        },
        {
          name: 'Antipasto Misto per Due',
          description: 'Selection of Italian cured meats, artisanal cheeses, marinated olives, and roasted vegetables',
          price: '$24',
          dietary: []
        },
        {
          name: 'Carpaccio di Manzo',
          description: 'Thinly sliced raw beef tenderloin with arugula, capers, lemon, and aged Parmigiano-Reggiano',
          price: '$18',
          dietary: ['gluten-free']
        },
        {
          name: 'Burrata con Prosciutto',
          description: 'Creamy burrata cheese served with San Daniele prosciutto, fresh figs, and honey drizzle',
          price: '$16',
          dietary: ['gluten-free']
        }
      ]
    },
    {
      category: 'Primi Piatti - First Courses',
      items: [
        {
          name: 'Risotto ai Porcini',
          description: 'Creamy Arborio rice with wild porcini mushrooms, finished with truffle oil and Pecorino Romano',
          price: '$28',
          dietary: ['vegetarian', 'gluten-free']
        },
        {
          name: 'Pasta alla Carbonara',
          description: 'House-made spaghetti with guanciale, farm-fresh eggs, Pecorino Romano, and black pepper',
          price: '$24',
          dietary: []
        },
        {
          name: 'Gnocchi alla Sorrentina',
          description: 'Handmade potato gnocchi in San Marzano tomato sauce with fresh mozzarella and basil',
          price: '$22',
          dietary: ['vegetarian']
        },
        {
          name: 'Linguine alle Vongole',
          description: 'Fresh clams sautéed with white wine, garlic, parsley, and a touch of chili flakes',
          price: '$26',
          dietary: []
        }
      ]
    },
    {
      category: 'Secondi Piatti - Main Courses',
      items: [
        {
          name: 'Osso Buco alla Milanese',
          description: 'Braised veal shanks in white wine and vegetables, served with saffron risotto',
          price: '$42',
          dietary: ['gluten-free']
        },
        {
          name: 'Branzino in Crosta di Sale',
          description: 'Mediterranean sea bass baked in sea salt crust with herbs, served with roasted seasonal vegetables',
          price: '$36',
          dietary: ['gluten-free']
        },
        {
          name: 'Costoletta alla Milanese',
          description: 'Bone-in veal chop, breaded and pan-fried, served with arugula salad and cherry tomatoes',
          price: '$38',
          dietary: []
        },
        {
          name: 'Pollo al Mattone',
          description: 'Herb-marinated chicken pressed and grilled, served with roasted potatoes and rosemary',
          price: '$32',
          dietary: ['gluten-free']
        }
      ]
    },
    {
      category: 'Dolci - Desserts',
      items: [
        {
          name: 'Tiramisu della Casa',
          description: 'Traditional mascarpone dessert with espresso-soaked ladyfingers and cocoa powder',
          price: '$12',
          dietary: ['vegetarian']
        },
        {
          name: 'Panna Cotta ai Frutti di Bosco',
          description: 'Silky vanilla custard served with mixed berry compote and fresh mint',
          price: '$10',
          dietary: ['vegetarian', 'gluten-free']
        },
        {
          name: 'Cannoli Siciliani',
          description: 'Crispy pastry shells filled with sweet ricotta, chocolate chips, and candied fruit',
          price: '$9',
          dietary: ['vegetarian']
        },
        {
          name: 'Affogato al Caffè',
          description: 'Vanilla gelato "drowned" in hot espresso, served with amaretti cookies',
          price: '$8',
          dietary: ['vegetarian']
        }
      ]
    }
  ];

  const getDietaryBadge = (dietary: string) => {
    const colors = {
      vegetarian: 'bg-green-100 text-green-800',
      'gluten-free': 'bg-blue-100 text-blue-800',
      vegan: 'bg-purple-100 text-purple-800'
    };
    return colors[dietary as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-restaurant-cream/20 to-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-restaurant-dark mb-6 animate-fade-up">
            La Nostra Menu
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Authentic Italian cuisine crafted with the finest ingredients, traditional techniques, and passion for excellence.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {menuSections.map((section, sectionIndex) => (
              <div key={section.category} className="animate-fade-up" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
                <h2 className="text-3xl font-bold font-playfair text-restaurant-dark text-center mb-12">
                  {section.category}
                </h2>
                
                <div className="grid gap-6">
                  {section.items.map((item, itemIndex) => (
                    <Card 
                      key={item.name} 
                      className="hover:shadow-lg transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: `${(sectionIndex * 100) + (itemIndex * 50)}ms` }}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-restaurant-dark font-playfair">
                                {item.name}
                              </h3>
                              {item.dietary.map((diet) => (
                                <Badge 
                                  key={diet} 
                                  className={`${getDietaryBadge(diet)} text-xs font-inter`}
                                >
                                  {diet === 'gluten-free' ? 'GF' : diet.charAt(0).toUpperCase() + diet.slice(1)}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-muted-foreground font-inter leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          
                          <div className="md:text-right md:ml-6">
                            <span className="text-2xl font-bold text-restaurant-red font-playfair">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;