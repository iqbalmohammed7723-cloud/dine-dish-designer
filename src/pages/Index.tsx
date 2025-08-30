import React from 'react';
import Navigation from '@/components/Navigation';
import RestaurantHero from '@/components/RestaurantHero';
import MenuPreview from '@/components/MenuPreview';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <RestaurantHero />
      <MenuPreview />
    </div>
  );
};

export default Index;
