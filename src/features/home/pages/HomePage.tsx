import { PageShell } from "@/shared/components";
import { NewsGrid } from "@/features/news-details";
import Hero from "../components/Hero";
import CurrentEvents from "../components/CurrentEvents";
import Announcements from "../components/Announcements";
import QuickServices from "../components/QuickServices";
import Destinations from "../components/Destinations";
import Hotels from "../components/Hotels";
import Culture from "../components/Culture";

const HomePage = () => {
  return (
    <PageShell>
      <Hero />
      <CurrentEvents />
      <Announcements />
      <NewsGrid />
      <QuickServices />
      <Destinations />
      <Hotels />
      <Culture />
    </PageShell>
  );
};

export default HomePage;
