import React from 'react';
import Hero from '@/components/Hero';
import MenuBuilder from '@/components/MenuBuilder';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <Hero />
      <main className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-restaurant-elegant mb-4">
              Build Your Perfect Menu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our professional menu builder to create stunning digital menus that showcase your dishes beautifully.
            </p>
          </div>
          <MenuBuilder />
        </div>
      </main>
    </div>
  );
};

export default Index;
