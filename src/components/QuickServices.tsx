import { 
  Building2, 
  FileCheck, 
  GraduationCap, 
  Shield, 
  MapPin, 
  Megaphone,
  Award,
  HeartHandshake
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Hotel Registration & Licensing",
    description: "Registration and licensing of hotels, guest houses, and other accommodation facilities"
  },
  {
    icon: FileCheck,
    title: "Tourism Business Permits",
    description: "Issuance of permits for tour operators, travel agencies, and tourism-related businesses"
  },
  {
    icon: GraduationCap,
    title: "Hospitality Training",
    description: "Professional training and capacity building programs for hospitality workers"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Regular inspection and grading of tourism facilities to ensure international standards"
  },
  {
    icon: MapPin,
    title: "Tourist Information Services",
    description: "Provision of information on attractions, accommodations, and tourism activities"
  },
  {
    icon: Megaphone,
    title: "Tourism Promotion",
    description: "Marketing and promotion of Akwa Ibom as a premier tourism destination"
  },
  {
    icon: Award,
    title: "Tourism Awards & Recognition",
    description: "Recognition and awards for excellence in the hospitality and tourism sector"
  },
  {
    icon: HeartHandshake,
    title: "Investor Support",
    description: "Facilitation and support for tourism investments and partnerships"
  }
];

const QuickServices = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            How We Help
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Akwa Ibom Hotels and Tourism Board provides a range of services to support 
            the growth and development of the tourism sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 
                border border-border hover:border-secondary/30 group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center 
                mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="text-secondary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
