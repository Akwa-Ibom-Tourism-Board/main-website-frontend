import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const departments = [
  {
    name: "Office of the Board Chairman",
    head: "Board Chairman",
    description: "Overall leadership and strategic direction of the board.",
  },
  {
    name: "Administration & Human Resources",
    head: "Director, Admin & HR",
    description: "Personnel management, administrative operations, and staff welfare.",
  },
  {
    name: "Tourism Development",
    head: "Director, Tourism",
    description: "Development of tourism attractions and promotion of destinations.",
  },
  {
    name: "Hotels & Hospitality",
    head: "Director, Hotels",
    description: "Regulation and licensing of hotels and hospitality establishments.",
  },
  {
    name: "Marketing & Publicity",
    head: "Director, Marketing",
    description: "Marketing campaigns, public relations, and brand promotion.",
  },
  {
    name: "Finance & Accounts",
    head: "Director, Finance",
    description: "Financial management, budgeting, and accounting services.",
  },
  {
    name: "Research & Statistics",
    head: "Director, Research",
    description: "Data collection, analysis, and tourism research.",
  },
];

const OrganizationalStructure = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Organizational Structure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Our team dedicated to tourism excellence
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Org Chart Visual */}
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center shadow-lg">
                <h3 className="font-display text-lg font-bold">Board Chairman</h3>
                <p className="text-sm opacity-90">Chief Executive</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-border" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {departments.slice(1, 5).map((dept, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-foreground text-sm mb-1">{dept.head}</h4>
                  <p className="text-xs text-muted-foreground">{dept.name.split('&')[0]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Department Details */}
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Departments & Units
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{dept.name}</h3>
                    <p className="text-sm text-primary mb-2">{dept.head}</p>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
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

export default OrganizationalStructure;
