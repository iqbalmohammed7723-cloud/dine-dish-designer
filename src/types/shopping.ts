export type Category = 
  | 'Groceries'
  | 'Snacks'
  | 'Household'
  | 'Fruits & Vegetables'
  | 'Beverages'
  | 'Personal Care'
  | 'Others';

export interface ShoppingItem {
  id: string;
  name: string;
  quantity?: string;
  category: Category;
  bought: boolean;
  createdAt: number;
}

export const CATEGORIES: Category[] = [
  'Groceries',
  'Snacks',
  'Household',
  'Fruits & Vegetables',
  'Beverages',
  'Personal Care',
  'Others'
];

export const CATEGORY_COLORS: Record<Category, string> = {
  'Groceries': 'bg-category-groceries',
  'Snacks': 'bg-category-snacks',
  'Household': 'bg-category-household',
  'Fruits & Vegetables': 'bg-category-fruits',
  'Beverages': 'bg-category-beverages',
  'Personal Care': 'bg-category-personal',
  'Others': 'bg-category-others'
};

export const CATEGORY_ICONS: Record<Category, string> = {
  'Groceries': '🛒',
  'Snacks': '🍿',
  'Household': '🏠',
  'Fruits & Vegetables': '🥗',
  'Beverages': '🥤',
  'Personal Care': '🧴',
  'Others': '📦'
};
