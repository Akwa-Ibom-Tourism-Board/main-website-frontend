import { Music, Palette, Calendar, Users } from "lucide-react";
import { Container } from "@/shared/components";
import culturalMenImg from "@/assets/men-dance.png";
import {
  Section,
  Grid,
  ImageFrame,
  Image,
  ImageScrim,
  Title,
  Lede,
  HighlightGrid,
  HighlightItem,
  HighlightIcon,
  HighlightTitle,
  HighlightDescription,
} from "./Culture.styles";

const highlights = [
  {
    icon: Music,
    title: "Traditional Music & Dance",
    description: "Experience the rhythmic beats of Ekpo and Ekombi dances",
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Discover handwoven baskets, pottery, and wood carvings",
  },
  {
    icon: Calendar,
    title: "Cultural Festivals",
    description:
      "Join vibrant celebrations like the Christmas Village Festival",
  },
  {
    icon: Users,
    title: "Local Communities",
    description: "Meet warm, welcoming people proud of their heritage",
  },
];

const Culture = () => {
  return (
    <Section id="culture">
      <Container>
        <Grid>
          <ImageFrame>
            <Image src={culturalMenImg} alt="Cultural performance" />
            <ImageScrim />
          </ImageFrame>

          <div>
            <Title>Rich Cultural Heritage</Title>
            <Lede>
              Immerse yourself in the vibrant traditions, art, and customs of
              the Ibibio, Annang, and Oron people that make Akwa Ibom unique.
            </Lede>

            <HighlightGrid>
              {highlights.map((item) => (
                <HighlightItem key={item.title}>
                  <HighlightIcon>
                    <item.icon size={24} />
                  </HighlightIcon>
                  <div>
                    <HighlightTitle>{item.title}</HighlightTitle>
                    <HighlightDescription>
                      {item.description}
                    </HighlightDescription>
                  </div>
                </HighlightItem>
              ))}
            </HighlightGrid>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Culture;
