import { Users, Calendar, MapPin, Clock } from "lucide-react";
import { PageShell, PageHeroBanner } from "@/shared/components";
import { useTheme } from "@/theme";
import {
  ContentSection,
  Inner,
  Header,
  HeaderTitle,
  HeaderText,
  ToursGrid,
  TourCard,
  TourImage,
  TourBody,
  TourTitle,
  TourText,
  TourMeta,
  TourMetaItem,
  WhySection,
  WhyTitle,
  WhyGrid,
  WhyItem,
  WhyIconCircle,
  WhyItemTitle,
  WhyItemText,
} from "./GroupToursPage.styles";

const tours = [
  {
    title: "Ibeno Beach Experience",
    duration: "Full Day",
    groupSize: "10-25 people",
    description:
      "Experience the longest coastline in West Africa with swimming, beach games, and local cuisine.",
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

const GroupToursPage = () => {
  const theme = useTheme();

  return (
    <PageShell>
      <PageHeroBanner
        title="Group Tours"
        subtitle="Explore Akwa Ibom together with curated group experiences"
        tint="panel"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Inner>
          <Header>
            <HeaderTitle>Popular Group Tour Packages</HeaderTitle>
            <HeaderText>
              Join fellow travelers and discover the beauty of Akwa Ibom State through
              our carefully curated group tour experiences.
            </HeaderText>
          </Header>

          <ToursGrid>
            {tours.map((tour, index) => (
              <TourCard key={index}>
                <TourImage />
                <TourBody>
                  <TourTitle>{tour.title}</TourTitle>
                  <TourText>{tour.description}</TourText>
                  <TourMeta>
                    <TourMetaItem>
                      <Clock size={12} /> {tour.duration}
                    </TourMetaItem>
                    <TourMetaItem>
                      <Users size={12} /> {tour.groupSize}
                    </TourMetaItem>
                  </TourMeta>
                </TourBody>
              </TourCard>
            ))}
          </ToursGrid>

          <WhySection>
            <WhyTitle>Why Choose Group Tours?</WhyTitle>
            <WhyGrid>
              <WhyItem>
                <WhyIconCircle $variant="primary">
                  <Users color={theme.colors.primary.DEFAULT} size={24} />
                </WhyIconCircle>
                <WhyItemTitle>Social Experience</WhyItemTitle>
                <WhyItemText>Meet like-minded travelers and create lasting memories together.</WhyItemText>
              </WhyItem>
              <WhyItem>
                <WhyIconCircle $variant="secondary">
                  <MapPin color={theme.colors.secondary.DEFAULT} size={24} />
                </WhyIconCircle>
                <WhyItemTitle>Expert Guides</WhyItemTitle>
                <WhyItemText>Professional local guides who know every hidden gem.</WhyItemText>
              </WhyItem>
              <WhyItem>
                <WhyIconCircle $variant="primary">
                  <Calendar color={theme.colors.primary.DEFAULT} size={24} />
                </WhyIconCircle>
                <WhyItemTitle>Cost Effective</WhyItemTitle>
                <WhyItemText>Share costs and enjoy premium experiences at better rates.</WhyItemText>
              </WhyItem>
            </WhyGrid>
          </WhySection>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default GroupToursPage;
