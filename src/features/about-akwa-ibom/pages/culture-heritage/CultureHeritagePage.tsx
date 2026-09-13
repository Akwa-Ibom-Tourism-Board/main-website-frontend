import { PageShell, PageHeroBanner } from "@/shared/components";
import {
  ContentSection,
  Inner,
  SectionTitle,
  Paragraph,
  FestivalGrid,
  FestivalCard,
  FestivalTitle,
  FestivalText,
} from "./CultureHeritagePage.styles";

const CultureHeritagePage = () => {
  return (
    <PageShell>
      <PageHeroBanner
        title="Culture & Heritage"
        subtitle="Rich traditions, vibrant festivals, and timeless customs"
        tint="panel"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Inner>
          <SectionTitle>The People</SectionTitle>
          <Paragraph>
            The people of Akwa Ibom State are predominantly Ibibio, with significant populations of Annang and Oron
            people. These ethnic groups share common linguistic and cultural ties, united by their rich traditions,
            hospitality, and strong family values.
          </Paragraph>

          <SectionTitle>Traditional Festivals</SectionTitle>
          <FestivalGrid>
            <FestivalCard>
              <FestivalTitle>Ekpe Festival</FestivalTitle>
              <FestivalText>
                An ancient masquerade festival celebrating the Ekpe secret society, featuring elaborate costumes and
                traditional music.
              </FestivalText>
            </FestivalCard>
            <FestivalCard>
              <FestivalTitle>Ekong Festival</FestivalTitle>
              <FestivalText>
                A warrior festival celebrating bravery and military prowess, with dance performances and cultural
                displays.
              </FestivalText>
            </FestivalCard>
            <FestivalCard>
              <FestivalTitle>Ekombi Dance</FestivalTitle>
              <FestivalText>
                A graceful traditional dance performed by maidens, symbolizing beauty, elegance, and cultural pride.
              </FestivalText>
            </FestivalCard>
            <FestivalCard>
              <FestivalTitle>New Yam Festival</FestivalTitle>
              <FestivalText>
                A harvest celebration marking the beginning of the new yam season, featuring thanksgiving and
                communal feasting.
              </FestivalText>
            </FestivalCard>
          </FestivalGrid>

          <SectionTitle>Arts & Crafts</SectionTitle>
          <Paragraph>
            Akwa Ibom is renowned for its artistic heritage, including intricate wood carvings, especially the famous
            Ekpu ancestral figures of the Oron people. Traditional crafts include raffia weaving, pottery, and
            beadwork that continue to be practiced and celebrated today.
          </Paragraph>

          <SectionTitle>Music & Dance</SectionTitle>
          <Paragraph>
            Traditional music features instruments like the ekwe (slit drum), ubom (talking drum), and the iconic
            Afang wooden xylophone. These instruments accompany various dances that tell stories of history,
            celebration, and community life.
          </Paragraph>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default CultureHeritagePage;
