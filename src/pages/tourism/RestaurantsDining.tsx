import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, MapPin, Phone } from "lucide-react";

const restaurants = [
  { name: "Ibom Icon Restaurant", cuisine: "International", rating: 5, location: "Uyo" },
  { name: "Le Meridien Kitchen", cuisine: "Continental", rating: 4, location: "Uyo" },
  { name: "Kilimanjaro Restaurant", cuisine: "African & Continental", rating: 4, location: "Uyo" },
  { name: "Tropicana Restaurant", cuisine: "Nigerian", rating: 4, location: "Uyo" },
  { name: "Beachside Grill", cuisine: "Seafood", rating: 4, location: "Ibeno" },
  { name: "Palm Gardens", cuisine: "Local Delicacies", rating: 4, location: "Eket" },
];

const RestaurantsDining = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-secondary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Restaurants & Fine Dining
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Savor exquisite cuisines from world-class restaurants
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Featured Restaurants
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From traditional Ibibio delicacies to international cuisines, Akwa Ibom State 
              offers a diverse culinary experience for every palate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {restaurants.map((restaurant, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex gap-4"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {restaurant.location}
                    </span>
                    <span className="flex items-center gap-0.5">
                      {[...Array(restaurant.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Local Delicacies to Try
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Afang Soup</h4>
                <p className="text-sm text-muted-foreground">A rich, nutritious soup made with afang leaves and water leaves, served with fufu.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Edikang Ikong</h4>
                <p className="text-sm text-muted-foreground">A vegetable soup made with pumpkin and water leaves, packed with proteins.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Ekpang Nkukwo</h4>
                <p className="text-sm text-muted-foreground">Grated cocoyam wrapped in cocoyam leaves, cooked with periwinkles and palm oil.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Afia Efere</h4>
                <p className="text-sm text-muted-foreground">White soup, a traditional delicacy served during special occasions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RestaurantsDining;
