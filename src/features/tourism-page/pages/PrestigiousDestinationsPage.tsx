import { PageShell, PageHeroBanner } from "@/shared/components";
import {
  ContentSection,
  Inner,
  DestinationsGrid,
  DestinationCard,
  DestinationImage,
  DestinationBody,
  DestinationTitle,
  DestinationText,
  FeaturesRow,
  FeatureTag,
} from "./PrestigiousDestinationsPage.styles";

const destinations = [
  {
    name: "Ibeno Beach",
    description: "The longest beach in West Africa, offering pristine sandy shores and spectacular ocean views.",
    features: ["Swimming", "Beach Sports", "Seafood", "Sunset Views"],
  },
  {
    name: "Ibom Icon Hotel & Golf Resort",
    description:
      "A world-class 5-star hotel and golf resort offering luxury accommodation and championship golf course.",
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
    description:
      "Celebrating the state's abundant raffia palms and their significance to local culture and economy.",
    features: ["Nature", "Photography", "Cultural Significance", "Local Crafts"],
  },
  {
    name: "Oron Museum",
    description: "Home to ancient Ekpu ancestral figures and artifacts of the Oron people.",
    features: ["Ancient Artifacts", "Sculpture Gallery", "Cultural Education", "Research"],
  },
];

const PrestigiousDestinationsPage = () => {
  return (
    <PageShell>
      <PageHeroBanner
        title="Prestigious Destinations"
        subtitle="Discover the most remarkable attractions in Akwa Ibom State"
        tint="scene"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Inner>
          <DestinationsGrid>
            {destinations.map((dest, index) => (
              <DestinationCard key={index}>
                <DestinationImage data-destination-image />
                <DestinationBody>
                  <DestinationTitle>{dest.name}</DestinationTitle>
                  <DestinationText>{dest.description}</DestinationText>
                  <FeaturesRow>
                    {dest.features.map((feature, i) => (
                      <FeatureTag key={i}>{feature}</FeatureTag>
                    ))}
                  </FeaturesRow>
                </DestinationBody>
              </DestinationCard>
            ))}
          </DestinationsGrid>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default PrestigiousDestinationsPage;
