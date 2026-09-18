import { Star, MapPin } from "lucide-react";
import { PageShell, PageHeroBanner } from "@/shared/components";
import { useTheme } from "@/theme";
import {
  ContentSection,
  Inner,
  Header,
  HeaderTitle,
  HeaderText,
  RestaurantsGrid,
  RestaurantCard,
  RestaurantThumb,
  RestaurantBody,
  RestaurantName,
  RestaurantCuisine,
  RestaurantMeta,
  MetaLocation,
  RatingRow,
  DelicaciesSection,
  DelicaciesTitle,
  DelicaciesGrid,
  DelicacyTitle,
  DelicacyText,
} from "./RestaurantsDiningPage.styles";

const restaurants = [
  { name: "Ibom Icon Restaurant", cuisine: "International", rating: 5, location: "Uyo" },
  { name: "Le Meridien Kitchen", cuisine: "Continental", rating: 4, location: "Uyo" },
  { name: "Kilimanjaro Restaurant", cuisine: "African & Continental", rating: 4, location: "Uyo" },
  { name: "Tropicana Restaurant", cuisine: "Nigerian", rating: 4, location: "Uyo" },
  { name: "Beachside Grill", cuisine: "Seafood", rating: 4, location: "Ibeno" },
  { name: "Palm Gardens", cuisine: "Local Delicacies", rating: 4, location: "Eket" },
];

const RestaurantsDiningPage = () => {
  const theme = useTheme();

  return (
    <PageShell>
      <PageHeroBanner
        title="Restaurants & Fine Dining"
        subtitle="Savor exquisite cuisines from world class restaurants"
        tint="panel"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Inner>
          <Header>
            <HeaderTitle>Featured Restaurants</HeaderTitle>
            <HeaderText>
              From traditional Ibibio delicacies to international cuisines, Akwa Ibom State
              offers a diverse culinary experience for every palate.
            </HeaderText>
          </Header>

          <RestaurantsGrid>
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index}>
                <RestaurantThumb />
                <RestaurantBody>
                  <RestaurantName>{restaurant.name}</RestaurantName>
                  <RestaurantCuisine>{restaurant.cuisine}</RestaurantCuisine>
                  <RestaurantMeta>
                    <MetaLocation>
                      <MapPin size={12} /> {restaurant.location}
                    </MetaLocation>
                    <RatingRow>
                      {[...Array(restaurant.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          color={theme.colors.secondary.DEFAULT}
                          fill={theme.colors.secondary.DEFAULT}
                        />
                      ))}
                    </RatingRow>
                  </RestaurantMeta>
                </RestaurantBody>
              </RestaurantCard>
            ))}
          </RestaurantsGrid>

          <DelicaciesSection>
            <DelicaciesTitle>Local Delicacies to Try</DelicaciesTitle>
            <DelicaciesGrid>
              <div>
                <DelicacyTitle>Afang Soup</DelicacyTitle>
                <DelicacyText>
                  A rich, nutritious soup made with afang leaves and water leaves, served with fufu.
                </DelicacyText>
              </div>
              <div>
                <DelicacyTitle>Edikang Ikong</DelicacyTitle>
                <DelicacyText>
                  A vegetable soup made with pumpkin and water leaves, packed with proteins.
                </DelicacyText>
              </div>
              <div>
                <DelicacyTitle>Ekpang Nkukwo</DelicacyTitle>
                <DelicacyText>
                  Grated cocoyam wrapped in cocoyam leaves, cooked with periwinkles and palm oil.
                </DelicacyText>
              </div>
              <div>
                <DelicacyTitle>Afia Efere</DelicacyTitle>
                <DelicacyText>White soup, a traditional delicacy served during special occasions.</DelicacyText>
              </div>
            </DelicaciesGrid>
          </DelicaciesSection>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default RestaurantsDiningPage;
