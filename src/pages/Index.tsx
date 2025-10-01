import { useState } from 'react';
import { Plus, Share2, ListFilter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AddItemDialog } from '@/components/AddItemDialog';
import { ShoppingListItem } from '@/components/ShoppingListItem';
import { CategoryFilter } from '@/components/CategoryFilter';
import { useShoppingList } from '@/hooks/useShoppingList';
import { Category, CATEGORIES, CATEGORY_ICONS } from '@/types/shopping';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [showFilter, setShowFilter] = useState(false);
  const { items, addItem, toggleBought, deleteItem } = useShoppingList();
  const { toast } = useToast();

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const groupedItems = CATEGORIES.reduce((acc, category) => {
    const categoryItems = filteredItems.filter(item => item.category === category);
    if (categoryItems.length > 0 || selectedCategory === category) {
      acc[category] = categoryItems;
    }
    return acc;
  }, {} as Record<Category, typeof items>);

  const handleShare = async () => {
    const itemsList = items
      .map(item => `${item.bought ? '✓' : '○'} ${item.name}${item.quantity ? ` (${item.quantity})` : ''}`)
      .join('\n');
    
    const text = `My Shopping List:\n\n${itemsList}`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
        toast({ title: 'Shared successfully!' });
      } catch (err) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(text);
      toast({ title: 'List copied to clipboard!' });
    }
  };

  const boughtCount = items.filter(item => item.bought).length;
  const totalCount = items.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="container max-w-2xl px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-foreground">Shopping List</h1>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowFilter(!showFilter)}
              >
                <ListFilter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleShare}
                disabled={items.length === 0}
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          {totalCount > 0 && (
            <p className="text-sm text-muted-foreground">
              {boughtCount} of {totalCount} items bought
            </p>
          )}
          {showFilter && (
            <div className="mt-4">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-2xl px-4 py-6 pb-24">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-semibold mb-2">Your list is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding items to your shopping list
            </p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="h-5 w-5 mr-2" />
              Add First Item
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedItems).map(([category, categoryItems]) => (
              <div key={category} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{CATEGORY_ICONS[category as Category]}</span>
                  <h2 className="text-lg font-semibold">{category}</h2>
                  <span className="text-sm text-muted-foreground">
                    ({categoryItems.length})
                  </span>
                </div>
                <div className="space-y-2">
                  {categoryItems.map((item) => (
                    <ShoppingListItem
                      key={item.id}
                      item={item}
                      onToggle={toggleBought}
                      onDelete={deleteItem}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="lg"
          onClick={() => setIsAddDialogOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      {/* Add Item Dialog */}
      <AddItemDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAdd={addItem}
      />
    </div>
  );
};

export default Index;
