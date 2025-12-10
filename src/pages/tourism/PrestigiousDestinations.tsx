import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const destinations = [
  {
    name: "Ibeno Beach",
    description: "The longest beach in West Africa, offering pristine sandy shores and spectacular ocean views.",
    features: ["Swimming", "Beach Sports", "Seafood", "Sunset Views"],
  },
  {
    name: "Ibom Icon Hotel & Golf Resort",
    description: "A world-class 5-star hotel and golf resort offering luxury accommodation and championship golf course.",
    features: ["Golf Course", "Spa", "Fine Dining", "Conference Facilities"],
  },
  {
    name: "National Museum, Uyo",
    description: "A treasure trove of Ibibio art, artifacts, and cultural heritage spanning centuries.",
    features: ["Cultural Exhibits", "Art Gallery", "Guided Tours", "Gift Shop"],
  },
  {
    name: "Amalgamation House",
    description: "Historical monument marking the amalgamation of Northern and Southern Nigeria in 1914.",
    features: ["Historical Site", "Architecture", "Photography", "Educational Tours"],
  },
  {
    name: "Raffia Palm Monument",
    description: "Celebrating the state's abundant raffia palms and their significance to local culture and economy.",
    features: ["Nature", "Photography", "Cultural Significance", "Local Crafts"],
  },
  {
    name: "Oron Museum",
    description: "Home to ancient Ekpu ancestral figures and artifacts of the Oron people.",
    features: ["Ancient Artifacts", "Sculpture Gallery", "Cultural Education", "Research"],
  },
];

const PrestigiousDestinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Prestigious Destinations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover the most remarkable attractions in Akwa Ibom State
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/40 to-secondary/40 group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {dest.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {dest.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dest.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrestigiousDestinations;
