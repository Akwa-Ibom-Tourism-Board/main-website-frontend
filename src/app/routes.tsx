import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/features/home";
import { AboutBoardPage } from "@/features/about-board";
import { NewsDetailPage } from "@/features/news-details";
import { NotFoundPage } from "@/features/not-found";

// Tourism pages
import {
  TourOperatorsPage,
  GroupToursPage,
  PrestigiousDestinationsPage,
  RestaurantsDiningPage,
} from "@/features/tourism-page";

// About Akwa Ibom pages
import {
  AboutAkwaIbomPage,
  CultureHeritagePage,
  CalendarActivitiesPage,
} from "@/features/about-akwa-ibom";

// The Board pages
import { ConferencesEventsPage, OrganizationalStructurePage } from "@/features/the-board";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/about-akwa-ibom-state-tourism-board"
      element={<AboutBoardPage />}
    />
    <Route path="/news/:id" element={<NewsDetailPage />} />

    {/* Tourism routes */}
    <Route path="/tourism/tour-operators" element={<TourOperatorsPage />} />
    <Route path="/tourism/group-tours" element={<GroupToursPage />} />
    <Route
      path="/tourism/prestigious-destinations"
      element={<PrestigiousDestinationsPage />}
    />
    <Route
      path="/tourism/restaurants-fine-dining"
      element={<RestaurantsDiningPage />}
    />

    {/* About Akwa Ibom routes */}
    <Route path="/about-akwa-ibom" element={<AboutAkwaIbomPage />} />
    <Route
      path="/about-akwa-ibom/culture-heritage"
      element={<CultureHeritagePage />}
    />
    <Route path="/about-akwa-ibom/calendar" element={<CalendarActivitiesPage />} />

    {/* The Board routes */}
    <Route
      path="/the-board/conferences-events"
      element={<ConferencesEventsPage />}
    />
    <Route
      path="/the-board/organizational-structure"
      element={<OrganizationalStructurePage />}
    />

    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
