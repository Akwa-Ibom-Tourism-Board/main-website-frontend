import { PageShell, PageHeroBanner } from "@/shared/components";
import tourOperators from "@/assets/tour-operators.jpg";
import {
  ContentSection,
  Inner,
  SectionTitle,
  IntroText,
  OperatorsGrid,
  OperatorCard,
  OperatorTitle,
  OperatorText,
  LicensedBadge,
  List,
} from "./TourOperatorsPage.styles";

const TourOperatorsPage = () => {
  return (
    <PageShell>
      <PageHeroBanner
        title="Tour Operators"
        subtitle="Discover certified tour operators in Akwa Ibom State"
        image={tourOperators}
        subtitleColor="secondary"
        gradientOverlay
      />

      <ContentSection>
        <Inner>
          <SectionTitle>Licensed Tour Operators</SectionTitle>
          <IntroText>
            Akwa Ibom State is home to a number of licensed and professional
            tour operators who are dedicated to providing visitors with
            memorable experiences. These operators are certified by the Akwa
            Ibom State Hotels and Tourism Development Commission and adhere to
            the highest standards of service delivery.
          </IntroText>

          <OperatorsGrid>
            {[1, 2, 3, 4].map((i) => (
              <OperatorCard key={i}>
                <OperatorTitle>Tour Company {i}</OperatorTitle>
                <OperatorText>
                  Professional tour services across Akwa Ibom State with
                  experienced guides.
                </OperatorText>
                <LicensedBadge>Licensed Operator</LicensedBadge>
              </OperatorCard>
            ))}
          </OperatorsGrid>

          <SectionTitle>How to Choose a Tour Operator</SectionTitle>
          <List>
            <li>
              Verify their license with the Tourism Development Commission
            </li>
            <li>Check reviews and testimonials from previous clients</li>
            <li>Ensure they have proper insurance coverage</li>
            <li>Compare prices and services offered</li>
            <li>Ask about their experience with specific destinations</li>
          </List>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default TourOperatorsPage;
