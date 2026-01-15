import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutBoard from "./pages/AboutBoard";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

// Tourism pages
import TourOperators from "./pages/tourism/TourOperators";
import GroupTours from "./pages/tourism/GroupTours";
import PrestigiousDestinations from "./pages/tourism/PrestigiousDestinations";
import RestaurantsDining from "./pages/tourism/RestaurantsDining";

// About Akwa Ibom pages
import AboutAkwaIbom from "./pages/about-akwa-ibom/AboutAkwaIbom";
import CultureHeritage from "./pages/about-akwa-ibom/CultureHeritage";
import CalendarActivities from "./pages/about-akwa-ibom/CalendarActivities";

// The Board pages
import ConferencesEvents from "./pages/the-board/ConferencesEvents";
import OrganizationalStructure from "./pages/the-board/OrganizationalStructure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/about-akwa-ibom-state-tourism-board"
            element={<AboutBoard />}
          />
          <Route path="/news/:id" element={<NewsDetail />} />

          {/* Tourism routes */}
          <Route path="/tourism/tour-operators" element={<TourOperators />} />
          <Route path="/tourism/group-tours" element={<GroupTours />} />
          <Route
            path="/tourism/prestigious-destinations"
            element={<PrestigiousDestinations />}
          />
          <Route
            path="/tourism/restaurants-fine-dining"
            element={<RestaurantsDining />}
          />

          {/* About Akwa Ibom routes */}
          <Route path="/about-akwa-ibom" element={<AboutAkwaIbom />} />
          <Route
            path="/about-akwa-ibom/culture-heritage"
            element={<CultureHeritage />}
          />
          <Route
            path="/about-akwa-ibom/calendar"
            element={<CalendarActivities />}
          />

          {/* The Board routes */}
          <Route
            path="/the-board/conferences-events"
            element={<ConferencesEvents />}
          />
          <Route
            path="/the-board/organizational-structure"
            element={<OrganizationalStructure />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
