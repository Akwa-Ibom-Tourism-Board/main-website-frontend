import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { newsData } from "@/components/NewsAchievements";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 -mt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/">
              <Button variant="secondary" className="mb-6 shadow-lg">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border animate-fade-in">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  {newsItem.date}
                </span>
                <span className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                  <Tag size={14} />
                  {newsItem.category}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                {newsItem.title}
              </h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                {newsItem.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
