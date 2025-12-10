import { ArrowLeft, Target, Eye, History } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBeach from "@/assets/hero-beach.jpg";
import boardChairman from "@/assets/aunt-ime-flipped.png";

const AboutBoard = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBeach}
            alt="Akwa Ibom Tourism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-32 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            About Akwa Ibom Hotels & Tourism Board
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Promoting Excellence in Hospitality and Tourism
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* History Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Text */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <History className="text-secondary" size={24} />
                </div>
                <h2 className="font-display text-3xl font-bold text-primary">
                  Our History
                </h2>
              </div>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  The Akwa Ibom State Hotels and Tourism Board was established
                  by the State Government to regulate, develop, and promote the
                  hospitality and tourism sector in Akwa Ibom State.
                </p>
                <p className="mb-4">
                  Since its inception, the Board has been at the forefront of
                  transforming Akwa Ibom into one of Nigeria's premier tourism
                  destinations. Through strategic initiatives, partnerships, and
                  investments, we have positioned the state as the hospitality
                  capital of the South-South region.
                </p>
                <p>
                  Today, the Board oversees the registration and licensing of
                  over 500 hospitality establishments, coordinates tourism
                  promotion activities, and implements capacity building
                  programs for industry professionals. Our efforts have
                  contributed significantly to the state's economy and created
                  thousands of direct and indirect jobs.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in">
              <img
                src={heroBeach}
                alt="Tourism in Akwa Ibom"
                className="rounded-2xl shadow-xl w-full max-h-[400px] object-cover object-center"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-2xl md:text-4xl font-bold">500+</div>
                <div className="text-xs md:text-sm">Registered Hotels</div>
              </div>
            </div>
          </div>

          {/* Chairman Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Image */}
            <div className="w-full">
              <img
                src={boardChairman}
                alt="Board Chairman"
                className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover object-center"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="font-display text-3xl font-bold text-primary mb-4">
                Message from the Board Chairman
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to the Akwa Ibom State Hotels and Tourism Board. Our
                mission is to promote excellence in hospitality and showcase the
                rich culture and natural beauty of our state. We are committed
                to transforming Akwa Ibom into a top tourism destination through
                innovation, partnerships, and sustainable growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I invite you to explore our state’s hidden gems, experience our
                hospitality, and join us in celebrating the beauty and potential
                of Akwa Ibom.
              </p>
              <div>
                <p className="font-semibold text-primary mt-4">– Mrs Ime Udo</p>
                <p className="font-semibold text-primary">Board Chairman</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Mission Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border animate-fade-in hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The Board is poised to regulating the operations of Hospitality
                Establishments and Tourism towards generating revenue for Akwa
                Ibom State
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border animate-fade-in hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Eye className="text-secondary" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To serve as a data bank for the Management of Akwa Ibom Hotels
                and allied establishments and to promote the rich cultural
                heritage of the State through Tourism
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutBoard;
