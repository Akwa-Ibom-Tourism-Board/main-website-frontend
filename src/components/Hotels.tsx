import { Star, Wifi, Coffee, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import hotelImg from "@/assets/hotel.jpg";

const Hotels = () => {
  const hotels = [
    {
      name: "Le Meridien Ibom Hotel & Golf Resort",
      rating: 5,
      amenities: ["Free WiFi", "Restaurant", "Pool", "Golf Course"],
      image: hotelImg,
      price: "From ₦45,000/night",
    },
    {
      name: "Four Points by Sheraton",
      rating: 5,
      amenities: ["Free WiFi", "Restaurant", "Spa", "Gym"],
      price: "From ₦38,000/night",
    },
    {
      name: "Monty Suites",
      rating: 4,
      amenities: ["Free WiFi", "Restaurant", "Bar", "Airport Transfer"],
      price: "From ₦28,000/night",
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("WiFi")) return <Wifi size={16} />;
    if (amenity.includes("Restaurant")) return <Utensils size={16} />;
    return <Coffee size={16} />;
  };

  return (
    <section id="hotels" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            World-Class Accommodations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury and comfort at our finest hotels and resorts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 border-border">
              <div className="h-56 overflow-hidden">
                {index === 0 ? (
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"
                  ></div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.slice(0, 3).map((amenity, i) => (
                    <div 
                      key={i} 
                      className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <p className="font-bold text-primary text-lg">{hotel.price}</p>
                  </div>
                  <Button variant="default" className="bg-primary hover:bg-primary/90">
                    View Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
