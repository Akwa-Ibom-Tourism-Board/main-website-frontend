import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, MapPin } from "lucide-react";

const pastEvents = [
  {
    title: "Tourism Investment Summit 2024",
    date: "March 15-17, 2024",
    location: "Ibom Icon Hotel",
    attendees: "500+",
    description: "Annual summit bringing together investors, stakeholders, and tourism professionals.",
  },
  {
    title: "Hospitality Training Workshop",
    date: "February 8, 2024",
    location: "Le Meridien Hotel, Uyo",
    attendees: "200+",
    description: "Capacity building workshop for hotel and hospitality industry workers.",
  },
  {
    title: "Beach Tourism Conference",
    date: "January 20, 2024",
    location: "Ibeno Beach Resort",
    attendees: "300+",
    description: "Conference focused on developing and promoting beach tourism in the state.",
  },
];

const upcomingEvents = [
  {
    title: "Annual Tourism Awards",
    date: "December 2024",
    location: "To be announced",
    description: "Celebrating excellence in the tourism and hospitality sector.",
  },
  {
    title: "Heritage Sites Forum",
    date: "Q1 2025",
    location: "National Museum, Uyo",
    description: "Forum on preserving and promoting Akwa Ibom's heritage sites.",
  },
];

const ConferencesEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-secondary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Conferences & Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Building partnerships and advancing tourism development
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors"
                >
                  <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    Upcoming
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-4 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {event.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Past Events
            </h2>
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" /> {event.attendees} attendees
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConferencesEvents;
