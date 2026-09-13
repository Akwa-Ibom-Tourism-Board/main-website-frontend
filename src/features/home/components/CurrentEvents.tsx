import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui";
import { Container, GlowWrap } from "@/shared/components";
import mbobpoImg from "@/assets/mbopo-group.jpeg"
import leMeridienImg from "@/assets/le-meridien.jpeg";
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
  // External registration URL the CTA opens in a new tab.
  ctaLink?: string;
  // Gives the CTA a constant glow halo (matches the same CTA in the Navbar
  // and Hero carousel).
  glow?: boolean;
}

const REGISTER_ESTABLISHMENT_URL = "https://register.akhtdc.com.ng";
const MBOPO_AKWA_IBOM_URL = "https://mbopo-akwa-ibom-design.vercel.app/";

// TODO: swap this placeholder list for real, live events.
const currentEvents: CurrentEvent[] = [
  {
    id: "register-hospitality",
    title: "Register Your Hospitality Establishment",
    description:
      "Hotels, guest houses, and other hospitality businesses can register with the Commission for licensing and promotion.",
    image: leMeridienImg,
    ctaLabel: "Register Now",
    ctaLink: REGISTER_ESTABLISHMENT_URL,
    glow: true,
  },
  {
    id: "mbopo-akwa-ibom",
    title: "Mbobpo Akwa Ibom Pageant",
    description:
      "Celebrate culture and heritage — register to represent Akwa Ibom at the Mbobpo Akwa Ibom pageant.",
    image: mbobpoImg,
    ctaLabel: "Register for Mbobpo",
    ctaLink: MBOPO_AKWA_IBOM_URL,
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

// Cards are visually clickable (hover state) but only the CTA buttons link
// out (to the two external registration sites) — the cards themselves have
// no destination yet since there are no real event detail pages.
const CurrentEvents = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <Eyebrow>Get Involved</Eyebrow>
          <Title>Current Events</Title>
          <Lede>
            From cultural celebrations to community initiatives — here&apos;s
            what&apos;s happening across Akwa Ibom State right now.
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
                  <a
                    href={event.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.glow ? (
                      <GlowWrap>
                        <Button variant="secondary">{event.ctaLabel}</Button>
                      </GlowWrap>
                    ) : (
                      <Button variant="secondary">{event.ctaLabel}</Button>
                    )}
                  </a>
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
