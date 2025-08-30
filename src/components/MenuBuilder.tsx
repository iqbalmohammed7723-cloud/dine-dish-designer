import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2, Download, Share } from 'lucide-react';
import { toast } from 'sonner';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

const categories = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages', 'Specials'];

const MenuBuilder = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Appetizers'
  });
  const [restaurantName, setRestaurantName] = useState('');

  const addMenuItem = () => {
    if (!newItem.name || !newItem.price) {
      toast.error('Please fill in the name and price');
      return;
    }

    const menuItem: MenuItem = {
      id: Date.now().toString(),
      ...newItem
    };

    setMenuItems([...menuItems, menuItem]);
    setNewItem({
      name: '',
      description: '',
      price: '',
      category: 'Appetizers'
    });
    toast.success('Menu item added successfully!');
  };

  const removeMenuItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    toast.success('Menu item removed');
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto p-6">
      {/* Menu Builder Form */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-restaurant-warm to-restaurant-gold bg-clip-text text-transparent">
              Create Your Menu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="restaurant-name">Restaurant Name</Label>
              <Input
                id="restaurant-name"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                placeholder="Enter your restaurant name"
                className="mt-1"
              />
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Add Menu Item</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input
                    id="item-name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    placeholder="Grilled Salmon"
                  />
                </div>
                
                <div>
                  <Label htmlFor="item-price">Price</Label>
                  <Input
                    id="item-price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    placeholder="$24.99"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="item-category">Category</Label>
                <Select value={newItem.category} onValueChange={(value) => setNewItem({ ...newItem, category: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="item-description">Description</Label>
                <Textarea
                  id="item-description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  placeholder="Fresh Atlantic salmon grilled to perfection..."
                  rows={3}
                />
              </div>

              <Button onClick={addMenuItem} className="w-full bg-restaurant-warm hover:bg-restaurant-warm/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Menu Item
              </Button>
            </div>

            {menuItems.length > 0 && (
              <>
                <Separator />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share className="w-4 h-4 mr-2" />
                    Share Menu
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Current Items List */}
        {menuItems.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Current Items ({menuItems.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {menuItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.category} • {item.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeMenuItem(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Live Menu Preview */}
      <div className="lg:sticky lg:top-6">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 text-restaurant-elegant">
                {restaurantName || 'Your Restaurant'}
              </h1>
              <p className="text-muted-foreground">MENU</p>
              <div className="w-20 h-px bg-restaurant-gold mx-auto mt-4"></div>
            </div>

            {Object.keys(groupedItems).length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg mb-2">Your menu preview will appear here</p>
                <p className="text-sm">Add some items to get started</p>
              </div>
            ) : (
              <div className="space-y-8">
                {categories.map(category => {
                  const items = groupedItems[category];
                  if (!items || items.length === 0) return null;

                  return (
                    <div key={category}>
                      <h2 className="text-xl font-bold text-restaurant-elegant mb-4 uppercase tracking-wider">
                        {category}
                      </h2>
                      <div className="space-y-4">
                        {items.map(item => (
                          <div key={item.id} className="border-b border-border/30 pb-4 last:border-b-0">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-lg text-restaurant-elegant">
                                {item.name}
                              </h3>
                              <span className="font-bold text-restaurant-warm ml-4 flex-shrink-0">
                                {item.price}
                              </span>
                            </div>
                            {item.description && (
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MenuBuilder;