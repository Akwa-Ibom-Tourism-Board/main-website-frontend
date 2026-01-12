import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import ibomAirImg from "@/assets/ibom-air.webp";
import ibomstadium2Img from "@/assets/stad2.webp";
import tropicana from "@/assets/tropicana.jpg";
import uyoPlazaImg from "@/assets/plaz.png";
import ibenoImg from '@/assets/ibeno-beach.webp';

const heroImages = [uyoPlazaImg, ibomAirImg, ibomstadium2Img, tropicana, ibenoImg];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Akwa Ibom tourism ${index + 1}`}
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <MapPin className="text-secondary" size={24} />
            <span className="text-primary-foreground/90 font-medium uppercase tracking-wider text-sm">
              Nigeria's Hidden Gem
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Welcome to Akwa Ibom Hotels and Tourism Board
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in">
            Curating world-class hospitality, 
            and unforgettable adventures in the land of promise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link to="/about-akwa-ibom-state-tourism-board">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 shadow-elegant w-full sm:w-auto"
              >
                About Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              View Hotels
            </Button> */}
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute hidden bottom-32 left-1/2 -translate-x-1/2 z-20 md:flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? "bg-secondary w-8" 
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
