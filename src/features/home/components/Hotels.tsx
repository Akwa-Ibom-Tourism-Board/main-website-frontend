import { Star, Wifi, Coffee, Utensils } from "lucide-react";
import { Container } from "@/shared/components";
import { Button } from "@/shared/ui";
import hotelImg from "@/assets/le-meridien.jpeg";
import fourpointsImg from "@/assets/four-points.jpg";
import vinpyImg from "@/assets/vinpy-hotels.jpg";
import {
  Section,
  Heading,
  Title,
  Lede,
  Grid,
  HotelCard,
  ImageWrap,
  Image,
  Header,
  NameRow,
  HotelName,
  Stars,
  AmenityRow,
  AmenityPill,
  Content,
  PriceRow,
  PriceLabel,
  Price,
} from "./Hotels.styles";

const hotels = [
  {
    name: "Le Meridien Ibom Hotel & Golf Resort",
    rating: 5,
    amenities: ["Free WiFi", "Restaurant", "Pool", "Golf Course"],
    image: hotelImg,
    price: "From ₦45,000/night",
  },
  {
    name: "Four Points by Sheraton",
    rating: 5,
    amenities: ["Free WiFi", "Restaurant", "Spa", "Gym"],
    image: fourpointsImg,
    price: "From ₦38,000/night",
  },
  {
    name: "Vinpy Hotels",
    rating: 4,
    amenities: ["Free WiFi", "Restaurant", "Bar", "Airport Transfer"],
    image: vinpyImg,
    price: "From ₦28,000/night",
  },
];

const getAmenityIcon = (amenity: string) => {
  if (amenity.includes("WiFi")) return <Wifi size={16} />;
  if (amenity.includes("Restaurant")) return <Utensils size={16} />;
  return <Coffee size={16} />;
};

const Hotels = () => {
  return (
    <Section id="hotels">
      <Container>
        <Heading>
          <Title>World Class Accommodations</Title>
          <Lede>Experience luxury and comfort at our finest hotels and resorts</Lede>
        </Heading>

        <Grid>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.name}>
              <ImageWrap>
                <Image src={hotel.image} alt={hotel.name} />
              </ImageWrap>
              <Header>
                <NameRow>
                  <HotelName>{hotel.name}</HotelName>
                  <Stars>
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </Stars>
                </NameRow>
                <AmenityRow>
                  {hotel.amenities.slice(0, 3).map((amenity, i) => (
                    <AmenityPill key={i}>
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </AmenityPill>
                  ))}
                </AmenityRow>
              </Header>
              <Content>
                <PriceRow>
                  <div>
                    <PriceLabel>Starting at</PriceLabel>
                    <Price>{hotel.price}</Price>
                  </div>
                  <Button variant="default">View Website</Button>
                </PriceRow>
              </Content>
            </HotelCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Hotels;
