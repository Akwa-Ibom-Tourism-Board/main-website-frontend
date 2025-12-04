import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Hotels from "@/components/Hotels";
import Culture from "@/components/Culture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Destinations />
      <Hotels />
      <Culture />
      <Footer />
    </div>
  );
};

export default Index;
