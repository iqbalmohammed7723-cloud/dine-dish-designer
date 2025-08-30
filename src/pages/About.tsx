import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Authenticity',
      description: 'Every dish is prepared with traditional techniques passed down through generations, ensuring authentic Italian flavors.'
    },
    {
      icon: Users,
      title: 'Family Tradition',
      description: 'Our family has been serving authentic Italian cuisine for over 50 years, bringing you the taste of our homeland.'
    },
    {
      icon: Award,
      title: 'Quality Ingredients',
      description: 'We source the finest ingredients directly from Italy, ensuring every meal meets our high standards of excellence.'
    },
    {
      icon: Clock,
      title: 'Time-Honored Recipes',
      description: 'Our recipes have been perfected over decades, combining traditional methods with contemporary presentation.'
    }
  ];

  const team = [
    {
      name: 'Chef Marco Rossi',
      role: 'Executive Chef & Owner',
      description: 'With 25 years of culinary experience, Chef Marco brings authentic Tuscan flavors to every dish.'
    },
    {
      name: 'Isabella Benedetti',
      role: 'Sous Chef',
      description: 'Specializing in fresh pasta and traditional sauces, Isabella ensures every plate is perfect.'
    },
    {
      name: 'Giuseppe Fontana',
      role: 'Wine Sommelier',
      description: 'Our expert sommelier curates an extensive collection of Italian wines to complement your meal.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-restaurant-cream/20 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-restaurant-dark mb-6 animate-fade-up">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Bella Vista was born from a dream to bring the authentic flavors of Italy to our community. 
            Our journey began in a small Tuscan village, where our family recipes were first created.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold font-playfair text-restaurant-dark mb-6">
                From Tuscany to Your Table
              </h2>
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  In 1973, our founder Nonna Maria began cooking for her family in the hills of Tuscany. 
                  Her recipes, passed down through generations, became the foundation of what would later become Bella Vista.
                </p>
                <p>
                  When her grandson Marco moved to America in 1998, he carried with him not just recipes, 
                  but the soul of Italian cooking - the belief that food brings people together and creates lasting memories.
                </p>
                <p>
                  Today, Bella Vista continues this tradition, serving authentic Italian cuisine in an atmosphere 
                  that captures the warmth and hospitality of our Italian heritage. Every dish tells a story, 
                  every meal creates a memory.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="shadow-xl border-restaurant-cream">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-playfair text-restaurant-dark mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                    To provide an authentic Italian dining experience that honors our heritage while creating 
                    new traditions for families and friends to gather, celebrate, and connect over exceptional food.
                  </p>
                  <div className="bg-restaurant-gold/10 p-4 rounded-lg">
                    <p className="text-restaurant-dark font-inter italic">
                      "La famiglia è tutto - Family is everything. This is not just our motto, it's how we treat every guest who walks through our doors."
                    </p>
                    <p className="text-sm text-restaurant-gold font-medium mt-2">- Chef Marco Rossi</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-restaurant-cream/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-restaurant-dark mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Our values guide everything we do, from selecting ingredients to creating memorable experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in border-restaurant-cream"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-restaurant-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-restaurant-red" />
                    </div>
                    <h3 className="text-xl font-bold font-playfair text-restaurant-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-restaurant-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              The passionate individuals who bring authentic Italian flavors to your table every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-up border-restaurant-cream"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-restaurant-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-restaurant-dark font-playfair">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-playfair text-restaurant-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-restaurant-red font-medium font-inter mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;