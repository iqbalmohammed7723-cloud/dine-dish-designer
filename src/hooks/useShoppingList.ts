import { useState, useEffect } from 'react';
import { ShoppingItem, Category } from '@/types/shopping';

const STORAGE_KEY = 'shopping-list-items';

export const useShoppingList = () => {
  const [items, setItems] = useState<ShoppingItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (name: string, category: Category, quantity?: string) => {
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name,
      quantity,
      category,
      bought: false,
      createdAt: Date.now()
    };
    setItems(prev => [...prev, newItem]);
  };

  const toggleBought = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const getItemsByCategory = (category: Category) => {
    return items.filter(item => item.category === category);
  };

  return {
    items,
    addItem,
    toggleBought,
    deleteItem,
    getItemsByCategory
  };
};
