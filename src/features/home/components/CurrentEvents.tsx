import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui";
import { Container, GlowWrap } from "@/shared/components";
import hotelImg from "@/assets/hotel.jpg";
import cultureImg from "@/assets/culture.jpg";
import leMeridienImg from "@/assets/le-meridien.jpeg";
import ibenoImg from "@/assets/ibeno-beach.webp";
import fourPointsImg from "@/assets/four-points.jpg";
import {
  Section,
  Heading,
  Eyebrow,
  Title,
  Lede,
  Grid,
  EventCard,
  ImageWrap,
  Image,
  Body,
  CardTitle,
  Description,
  ViewDetails,
} from "./CurrentEvents.styles";

interface CurrentEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  // Only the two "get involved" cards carry a CTA button for now — the
  // rest read as plain informational cards until real event pages exist.
  ctaLabel?: string;
  // Gives the CTA a constant glow halo (matches the same CTA in the Navbar
  // and Hero carousel).
  glow?: boolean;
}

// TODO: swap this placeholder list for real, live events.
const currentEvents: CurrentEvent[] = [
  {
    id: "register-hospitality",
    title: "Register Your Hospitality Establishment",
    description:
      "Hotels, guest houses, and other hospitality businesses can register with the Commission for licensing and promotion.",
    image: hotelImg,
    ctaLabel: "Register Now",
    glow: true,
  },
  {
    id: "mbopo-akwa-ibom",
    title: "Mbopo Akwa Ibom Pageant",
    description:
      "Celebrate culture and heritage — register to represent Akwa Ibom at the Mbopo Akwa Ibom pageant.",
    image: cultureImg,
    ctaLabel: "Register for Mbopo",
  },
  // {
  //   id: "investment-summit",
  //   title: "Akwa Ibom Investment Summit 2026",
  //   description:
  //     "Investors and stakeholders gather to explore opportunities in tourism, hospitality, and infrastructure development.",
  //   image: leMeridienImg,
  // },
  // {
  //   id: "coastal-cleanup",
  //   title: "Coastal Clean-Up Drive",
  //   description: "Join volunteers and local communities for a beach clean-up exercise along the Ibeno coastline.",
  //   image: ibenoImg,
  // },
  // {
  //   id: "stakeholders-forum",
  //   title: "Tourism Stakeholders Forum",
  //   description: "Hoteliers, tour operators, and industry professionals convene to discuss the future of tourism in the state.",
  //   image: fourPointsImg,
  // },
];

// Cards are visually clickable (hover state) but intentionally carry no
// onClick/href yet — routing is being wired up separately.
const CurrentEvents = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <Eyebrow>Get Involved</Eyebrow>
          <Title>Current Events</Title>
          <Lede>
            From cultural celebrations to community initiatives — here&apos;s what&apos;s happening across Akwa
            Ibom State right now.
          </Lede>
        </Heading>

        <Grid>
          {currentEvents.map((event) => (
            <EventCard key={event.id}>
              <ImageWrap>
                <Image src={event.image} alt={event.title} />
              </ImageWrap>
              <Body>
                <CardTitle>{event.title}</CardTitle>
                <Description>{event.description}</Description>
                {event.ctaLabel ? (
                  event.glow ? (
                    <GlowWrap>
                      <Button variant="secondary">{event.ctaLabel}</Button>
                    </GlowWrap>
                  ) : (
                    <Button variant="secondary">{event.ctaLabel}</Button>
                  )
                ) : (
                  <ViewDetails>
                    View Details <ArrowRight size={16} />
                  </ViewDetails>
                )}
              </Body>
            </EventCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default CurrentEvents;
