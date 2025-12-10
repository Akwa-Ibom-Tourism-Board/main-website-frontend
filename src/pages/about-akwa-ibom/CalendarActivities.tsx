import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    month: "January",
    events: [
      { name: "New Year Beach Festival", date: "Jan 1-3", location: "Ibeno Beach" },
    ],
  },
  {
    month: "February",
    events: [
      { name: "Valentine Beach Party", date: "Feb 14", location: "Ibeno Beach" },
    ],
  },
  {
    month: "March",
    events: [
      { name: "Women's Day Celebration", date: "Mar 8", location: "Uyo" },
    ],
  },
  {
    month: "April",
    events: [
      { name: "Easter Beach Carnival", date: "Varies", location: "Ibeno Beach" },
    ],
  },
  {
    month: "August",
    events: [
      { name: "Calabar-Itu Festival", date: "Aug 15-20", location: "Itu" },
    ],
  },
  {
    month: "September",
    events: [
      { name: "State Anniversary Celebration", date: "Sep 23", location: "Uyo" },
    ],
  },
  {
    month: "October",
    events: [
      { name: "Tourism Week", date: "Oct 1-7", location: "Statewide" },
    ],
  },
  {
    month: "December",
    events: [
      { name: "Christmas Carnival", date: "Dec 20-31", location: "Uyo" },
      { name: "New Year's Eve Beach Party", date: "Dec 31", location: "Ibeno Beach" },
    ],
  },
];

const CalendarActivities = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Calendar of Activities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Plan your visit around our exciting events and festivals
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Annual Events & Festivals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Akwa Ibom State hosts numerous events throughout the year. Plan your visit 
              to coincide with these exciting celebrations.
            </p>
          </div>

          <div className="space-y-6">
            {events.map((monthData, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="bg-primary/10 px-6 py-3">
                  <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {monthData.month}
                  </h3>
                </div>
                <div className="p-6">
                  {monthData.events.map((event, i) => (
                    <div 
                      key={i}
                      className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                        i > 0 ? "mt-4 pt-4 border-t border-border" : ""
                      }`}
                    >
                      <div>
                        <h4 className="font-semibold text-foreground">{event.name}</h4>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {event.location}
                          </span>
                        </div>
                      </div>
                      <button className="text-sm text-primary hover:underline">
                        Learn More →
                      </button>
                    </div>
                  ))}
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

export default CalendarActivities;
