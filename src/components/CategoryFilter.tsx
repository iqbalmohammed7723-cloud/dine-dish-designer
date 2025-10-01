import { Category, CATEGORIES, CATEGORY_ICONS } from '@/types/shopping';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Button
        variant={selectedCategory === 'All' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onCategoryChange('All')}
        className="whitespace-nowrap"
      >
        All
      </Button>
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className="whitespace-nowrap"
        >
          {CATEGORY_ICONS[category]} {category}
        </Button>
      ))}
    </div>
  );
};
