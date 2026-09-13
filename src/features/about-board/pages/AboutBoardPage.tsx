import { ArrowLeft, Target, Eye, History } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import { PageShell } from "@/shared/components";
import heroBeach from "@/assets/hero-beach.jpg";
import boardChairman from "@/assets/aunt-ime-flipped.png";
import {
  Hero,
  HeroImageLayer,
  HeroImage,
  HeroScrim,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  MainSection,
  Inner,
  BackLink,
  SplitRow,
  TextBlock,
  SectionHeadingRow,
  IconBadge,
  SectionTitle,
  Prose,
  ImageBlock,
  RoundedImage,
  StatBadge,
  StatNumber,
  StatLabel,
  ChairmanImage,
  ChairmanText,
  ChairmanTitle,
  ChairmanParagraph,
  SignatureBlock,
  SignatureLine,
  CardsGrid,
  InfoCard,
  CardTitle,
  CardText,
} from "./AboutBoardPage.styles";

const AboutBoardPage = () => {
  return (
    <PageShell>
      <Hero>
        <HeroImageLayer>
          <HeroImage src={heroBeach} alt="Akwa Ibom Tourism" />
          <HeroScrim />
        </HeroImageLayer>
        <HeroContent>
          <HeroTitle>About Akwa Ibom Hotels & Tourism Development Commission</HeroTitle>
          <HeroSubtitle>Promoting Excellence in Hospitality and Tourism</HeroSubtitle>
        </HeroContent>
      </Hero>

      <MainSection>
        <Inner>
          <BackLink>
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </BackLink>

          <SplitRow>
            <TextBlock>
              <SectionHeadingRow>
                <IconBadge $variant="secondary">
                  <History size={24} />
                </IconBadge>
                <SectionTitle>Our History</SectionTitle>
              </SectionHeadingRow>
              <Prose>
                <p>
                  The Akwa Ibom State Hotels and Tourism Development Commission was established by the State
                  Government to regulate, develop, and promote the hospitality and tourism sector in Akwa Ibom
                  State.
                </p>
                <p>
                  Since its inception, the Commission has been at the forefront of transforming Akwa Ibom into one
                  of Nigeria&apos;s premier tourism destinations. Through strategic initiatives, partnerships, and
                  investments, we have positioned the state as the hospitality capital of the South-South region.
                </p>
                <p>
                  Today, the Commission oversees the registration and licensing of over 500 hospitality
                  establishments, coordinates tourism promotion activities, and implements capacity building
                  programs for industry professionals. Our efforts have contributed significantly to the state&apos;s
                  economy and created thousands of direct and indirect jobs.
                </p>
              </Prose>
            </TextBlock>

            <ImageBlock>
              <RoundedImage src={heroBeach} alt="Tourism in Akwa Ibom" />
              <StatBadge>
                <StatNumber>500+</StatNumber>
                <StatLabel>Registered Hotels</StatLabel>
              </StatBadge>
            </ImageBlock>
          </SplitRow>

          <SplitRow>
            <div>
              <ChairmanImage src={boardChairman} alt="Board Chairman" />
            </div>

            <ChairmanText>
              <ChairmanTitle>Message from the Chairman</ChairmanTitle>
              <ChairmanParagraph>
                Welcome to the Akwa Ibom State Hotels and Tourism Development Commission. Our mission is to promote
                excellence in hospitality and showcase the rich culture and natural beauty of our state. We are
                committed to transforming Akwa Ibom into a top tourism destination through innovation,
                partnerships, and sustainable growth.
              </ChairmanParagraph>
              <ChairmanParagraph>
                I invite you to explore our state&apos;s hidden gems, experience our hospitality, and join us in
                celebrating the beauty and potential of Akwa Ibom.
              </ChairmanParagraph>
              <SignatureBlock>
                <SignatureLine>– Mrs Ime Udo</SignatureLine>
                <SignatureLine>Commission Chairman</SignatureLine>
              </SignatureBlock>
            </ChairmanText>
          </SplitRow>

          <CardsGrid>
            <InfoCard>
              <SectionHeadingRow>
                <IconBadge $variant="primary">
                  <Target size={24} />
                </IconBadge>
                <CardTitle>Our Mission</CardTitle>
              </SectionHeadingRow>
              <CardText>
                The Commission is poised to regulating the operations of Hospitality Establishments and Tourism
                towards generating revenue for Akwa Ibom State
              </CardText>
            </InfoCard>

            <InfoCard>
              <SectionHeadingRow>
                <IconBadge $variant="secondary">
                  <Eye size={24} />
                </IconBadge>
                <CardTitle>Our Vision</CardTitle>
              </SectionHeadingRow>
              <CardText>
                To serve as a data bank for the Management of Akwa Ibom Hotels and allied establishments and to
                promote the rich cultural heritage of the State through Tourism
              </CardText>
            </InfoCard>
          </CardsGrid>
        </Inner>
      </MainSection>
    </PageShell>
  );
};

export default AboutBoardPage;
