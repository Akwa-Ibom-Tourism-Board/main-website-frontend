import { PageShell, PageHeroBanner } from "@/shared/components";
import {
  ContentSection,
  Inner,
  SectionTitle,
  Paragraph,
  FactsGrid,
  InfoCard,
  InfoCardTitle,
  InfoCardText,
  FactsList,
} from "./AboutAkwaIbomPage.styles";

const AboutAkwaIbomPage = () => {
  return (
    <PageShell>
      <PageHeroBanner
        title="About Akwa Ibom State"
        subtitle="Land of Promise - Nigeria's Oil Rich State"
        tint="scene"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Inner>
          <SectionTitle>Overview</SectionTitle>
          <Paragraph>
            Akwa Ibom State is one of the 36 states of Nigeria, located in the South-South geopolitical zone. Created
            on September 23, 1987 from the former Cross River State, Akwa Ibom is known as the "Land of Promise" and
            is the largest oil and gas producing state in Nigeria.
          </Paragraph>

          <FactsGrid>
            <InfoCard>
              <InfoCardTitle>Quick Facts</InfoCardTitle>
              <FactsList>
                <li>
                  <strong>Capital:</strong> Uyo
                </li>
                <li>
                  <strong>Population:</strong> ~5.5 million
                </li>
                <li>
                  <strong>Area:</strong> 7,081 km²
                </li>
                <li>
                  <strong>Local Government Areas:</strong> 31
                </li>
                <li>
                  <strong>Major Languages:</strong> Ibibio, Annang, Oron
                </li>
              </FactsList>
            </InfoCard>
            <InfoCard>
              <InfoCardTitle>Geography</InfoCardTitle>
              <InfoCardText>
                The state is bordered by Cross River State to the east, Rivers State and Abia State to the west, and
                the Atlantic Ocean to the south. Its coastline extends about 129 kilometers, featuring the longest
                beach in West Africa at Ibeno.
              </InfoCardText>
            </InfoCard>
          </FactsGrid>

          <SectionTitle>Economy</SectionTitle>
          <Paragraph>
            Akwa Ibom State is the largest oil and gas producing state in Nigeria, contributing significantly to the
            nation's petroleum output. Beyond oil, the state has a thriving agricultural sector, producing palm oil,
            cassava, cocoa, rubber, and various tropical fruits. The Ibom Industrial City project aims to diversify
            the economy through manufacturing and industrialization.
          </Paragraph>

          <SectionTitle>Infrastructure</SectionTitle>
          <Paragraph>
            The state boasts modern infrastructure including the Victor Attah International Airport, the Ibom Power
            Plant, excellent road networks, and the under-construction Ibom Deep Seaport. The Ibom Icon Hotel & Golf
            Resort represents the state's commitment to world class tourism infrastructure.
          </Paragraph>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default AboutAkwaIbomPage;
