import { Building2, FileCheck, GraduationCap, Shield, MapPin, Megaphone, Award, HeartHandshake } from "lucide-react";
import { Container } from "@/shared/components";
import { Section, Heading, Eyebrow, Title, Lede, Grid, ServiceCard, IconBadge, ServiceTitle, ServiceDescription } from "./QuickServices.styles";

const services = [
  {
    icon: Building2,
    title: "Hotel Registration & Licensing",
    description: "Registration and licensing of hotels, guest houses, and other accommodation facilities",
  },
  {
    icon: FileCheck,
    title: "Tourism Business Permits",
    description: "Issuance of permits for tour operators, travel agencies, and tourism-related businesses",
  },
  {
    icon: GraduationCap,
    title: "Hospitality Training",
    description: "Professional training and capacity building programs for hospitality workers",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Regular inspection and grading of tourism facilities to ensure international standards",
  },
  {
    icon: MapPin,
    title: "Tourist Information Services",
    description: "Provision of information on attractions, accommodations, and tourism activities",
  },
  {
    icon: Megaphone,
    title: "Tourism Promotion",
    description: "Marketing and promotion of Akwa Ibom as a premier tourism destination",
  },
  {
    icon: Award,
    title: "Tourism Awards & Recognition",
    description: "Recognition and awards for excellence in the hospitality and tourism sector",
  },
  {
    icon: HeartHandshake,
    title: "Investor Support",
    description: "Facilitation and support for tourism investments and partnerships",
  },
];

const QuickServices = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <Eyebrow>How We Help</Eyebrow>
          <Title>Our Services</Title>
          <Lede>
            The Akwa Ibom Hotels and Tourism Development Commission provides a range of services to support the
            growth and development of the tourism sector
          </Lede>
        </Heading>

        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={service.title} style={{ animationDelay: `${index * 50}ms` }}>
              <IconBadge>
                <service.icon size={24} />
              </IconBadge>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default QuickServices;
