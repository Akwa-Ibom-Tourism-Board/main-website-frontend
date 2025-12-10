import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Calendar, MapPin, Clock } from "lucide-react";

const GroupTours = () => {
  const tours = [
    {
      title: "Ibeno Beach Experience",
      duration: "Full Day",
      groupSize: "10-25 people",
      description: "Experience the longest coastline in West Africa with swimming, beach games, and local cuisine.",
    },
    {
      title: "Cultural Heritage Tour",
      duration: "2 Days",
      groupSize: "5-15 people",
      description: "Visit historical sites, museums, and experience traditional Ibibio culture firsthand.",
    },
    {
      title: "Eco-Tourism Adventure",
      duration: "3 Days",
      groupSize: "8-20 people",
      description: "Explore rainforests, waterfalls, and wildlife reserves in Akwa Ibom State.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-secondary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Group Tours
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore Akwa Ibom together with curated group experiences
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Popular Group Tour Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join fellow travelers and discover the beauty of Akwa Ibom State through 
              our carefully curated group tour experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tours.map((tour, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-primary/30 to-secondary/30" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {tour.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tour.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-3 w-3" /> {tour.groupSize}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Why Choose Group Tours?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Social Experience</h4>
                <p className="text-sm text-muted-foreground">Meet like-minded travelers and create lasting memories together.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Expert Guides</h4>
                <p className="text-sm text-muted-foreground">Professional local guides who know every hidden gem.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Cost Effective</h4>
                <p className="text-sm text-muted-foreground">Share costs and enjoy premium experiences at better rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupTours;
