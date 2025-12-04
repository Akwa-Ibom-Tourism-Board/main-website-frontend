import { MapPin, Waves, Mountain, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import natureImg from "@/assets/nature.jpg";
import cultureImg from "@/assets/culture.jpg";
import ibenoBeachImg from "@/assets/ibeno-beach.webp"
import uyoStadium from "@/assets/ibom-stadium.webp"

const Destinations = () => {
  const destinations = [
    {
      icon: Waves,
      title: "Ibeno Beach",
      description: "West Africa's longest stretch of white sand beach with crystal clear waters",
      image: ibenoBeachImg,
    },
    {
      icon: Mountain,
      title: "Ikot Abasi Waterfalls",
      description: "Breathtaking natural waterfalls surrounded by lush tropical rainforest",
      image: natureImg,
    },
    {
      icon: Camera,
      title: "Cultural Heritage Sites",
      description: "Explore ancient traditions, art, and the vibrant culture of the Ibibio people",
      image: cultureImg,
    },
    {
      icon: MapPin,
      title: "Uyo Township Stadium",
      description: "World-class modern facilities and entertainment venues",
      image: uyoStadium,
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From pristine beaches to cultural landmarks, discover the wonders that await you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => {
            const Icon = destination.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border hover:border-primary/50"
              >
                <div 
                  className="h-48 relative overflow-hidden"
                  style={{
                    background: typeof destination.image === 'string' && destination.image.startsWith('linear-gradient') 
                      ? destination.image 
                      : 'transparent'
                  }}
                >
                  {typeof destination.image === 'string' && !destination.image.startsWith('linear-gradient') && (
                    <img 
                      src={destination.image} 
                      alt={destination.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {destination.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {destination.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
