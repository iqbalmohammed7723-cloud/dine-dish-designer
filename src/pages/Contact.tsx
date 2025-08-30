import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Mail, Calendar, Users } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Reservation request sent! We\'ll contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Italian Boulevard', 'Little Italy, NY 10012'],
      link: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', 'Reservations & Inquiries'],
      link: 'Call Now'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Thu: 5:00 PM - 10:00 PM', 'Fri-Sat: 5:00 PM - 11:00 PM', 'Sun: 4:00 PM - 9:00 PM'],
      link: null
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@bellavista.com', 'events@bellavista.com'],
      link: 'Send Email'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-restaurant-cream/20 to-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-restaurant-dark mb-6 animate-fade-up">
            Contact & Reservations
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            We'd love to hear from you. Reserve your table or get in touch with any questions about our restaurant.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={info.title} 
                  className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in border-restaurant-cream"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-restaurant-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-restaurant-red" />
                    </div>
                    <h3 className="text-xl font-bold font-playfair text-restaurant-dark mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground font-inter text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.link && (
                      <Button variant="outline" size="sm" className="font-inter">
                        {info.link}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reservation Form and Map */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <Card className="shadow-xl animate-slide-in-left border-restaurant-cream">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-playfair text-restaurant-dark">
                  Make a Reservation
                </CardTitle>
                <p className="text-muted-foreground font-inter">
                  Book your table for an unforgettable dining experience.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-inter">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-inter">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="font-inter">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date" className="font-inter">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="font-inter">Time</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="font-inter">Guests</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="12"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-inter">Special Requests</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Dietary restrictions, special occasion, preferred seating..."
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="restaurant" 
                    className="w-full py-6 text-lg font-semibold font-inter"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Reserve Table
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions & Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Quick Order */}
              <Card className="border-restaurant-cream">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-playfair text-restaurant-dark">
                    Order Online
                  </CardTitle>
                  <p className="text-muted-foreground font-inter">
                    Enjoy Bella Vista at home with our takeout and delivery options.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="restaurant" className="w-full font-inter">
                      Order for Pickup
                    </Button>
                    <Button variant="outline" className="w-full font-inter">
                      Schedule Delivery
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Private Events */}
              <Card className="border-restaurant-cream">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-playfair text-restaurant-dark">
                    Private Events
                  </CardTitle>
                  <p className="text-muted-foreground font-inter">
                    Host your special occasion in our elegant private dining room.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground font-inter">
                      <Users className="w-5 h-5 text-restaurant-red" />
                      <span>Accommodates up to 40 guests</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground font-inter">
                      <Calendar className="w-5 h-5 text-restaurant-red" />
                      <span>Customized menus available</span>
                    </div>
                    <Button variant="outline" className="w-full font-inter">
                      Inquire About Events
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-restaurant-cream">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-restaurant-cream to-restaurant-gold/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-restaurant-red mx-auto mb-4" />
                      <h3 className="text-lg font-bold font-playfair text-restaurant-dark">
                        Find Us in Little Italy
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;