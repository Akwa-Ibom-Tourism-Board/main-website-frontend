import { MapPin, Waves, Mountain, Camera, FerrisWheel } from "lucide-react";
import { Container } from "@/shared/components";
import natureImg from "@/assets/nature.jpg";
import cultureImg from "@/assets/culture.jpg";
import ibenoImg from "@/assets/ibeno-beach.webp";
import ibomStadiumImg from "@/assets/ibom-stadium.webp";
import amalgamationHouse from "@/assets/amalgamate.jpeg";
import arisePark2 from "@/assets/hero/arise-park-2.jpg";
import {
  Section,
  Heading,
  Title,
  Lede,
  Grid,
  DestinationCard,
  ImageWrap,
  Image,
  Tint,
  IconBadge,
  Body,
  CardTitle,
  CardDescription,
} from "./Destinations.styles";

const destinations = [
  {
    icon: Waves,
    title: "Ibeno Beach",
    description:
      "West Africa's longest stretch of white sand beach with crystal clear waters",
    image: ibenoImg,
  },
  {
    icon: Mountain,
    title: "Ikot Abasi Waterfalls",
    description:
      "Breathtaking natural waterfalls surrounded by lush tropical rainforest",
    image: natureImg,
  },
  {
    icon: Camera,
    title: "Cultural Heritage Sites",
    description:
      "Explore ancient traditions, art, and the vibrant culture of the Ibibio people",
    image: amalgamationHouse,
  },
  {
    icon: MapPin,
    title: "Godswill Akpabio International Stadium",
    description: "World class modern facilities and entertainment venues",
    image: ibomStadiumImg,
  },
  {
    icon: FerrisWheel,
    title: "Arise Palm Resorts",
    description:
      "Ferris wheels, carousel rides, and green open spaces for the whole family to enjoy",
    image: arisePark2,
  },
];

const Destinations = () => {
  return (
    <Section id="destinations">
      <Container>
        <Heading>
          <Title>Featured Destinations</Title>
          <Lede>
            From pristine beaches to cultural landmarks, discover the wonders
            that await you
          </Lede>
        </Heading>

        <Grid>
          {destinations.map((destination) => (
            <DestinationCard key={destination.title}>
              <ImageWrap>
                <Image src={destination.image} alt={destination.title} />
                <Tint />
                <IconBadge>
                  <destination.icon size={24} />
                </IconBadge>
              </ImageWrap>
              <Body>
                <CardTitle>{destination.title}</CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </Body>
            </DestinationCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Destinations;
