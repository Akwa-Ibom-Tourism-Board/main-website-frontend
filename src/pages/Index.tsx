import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import NewsAchievements from "@/components/NewsAchievements";
import QuickServices from "@/components/QuickServices";
import Destinations from "@/components/Destinations";
import Hotels from "@/components/Hotels";
import Culture from "@/components/Culture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <Hero />
      <Announcements />
      <NewsAchievements />
      <QuickServices />
      <Destinations />
      <Hotels />
      <Culture />
      <Footer />
    </div>
  );
};

export default Index;
