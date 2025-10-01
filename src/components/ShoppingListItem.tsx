import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingItem } from '@/types/shopping';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShoppingListItemProps {
  item: ShoppingItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ShoppingListItem = ({ item, onToggle, onDelete }: ShoppingListItemProps) => {
  const [isLongPress, setIsLongPress] = useState(false);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    const timer = setTimeout(() => {
      setIsLongPress(true);
      onDelete(item.id);
    }, 500);
    setPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
    setIsLongPress(false);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 p-4 bg-card rounded-lg border border-border transition-all duration-200",
        item.bought && "opacity-60"
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <Checkbox
        checked={item.bought}
        onCheckedChange={() => onToggle(item.id)}
        className="h-5 w-5"
      />
      <div className="flex-1">
        <p className={cn(
          "text-base font-medium",
          item.bought && "line-through text-muted-foreground"
        )}>
          {item.name}
        </p>
        {item.quantity && (
          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
        )}
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};
