import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBeach}
          alt="Beautiful Akwa Ibom beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <MapPin className="text-secondary" size={24} />
            <span className="text-primary-foreground/90 font-medium uppercase tracking-wider text-sm">
              Nigeria's Hidden Gem
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Discover the Beauty of Akwa Ibom State
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in">
            Experience pristine beaches, rich cultural heritage, world-class hospitality, 
            and unforgettable adventures in the land of promise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 shadow-elegant"
            >
              Explore Destinations
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              View Hotels
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
