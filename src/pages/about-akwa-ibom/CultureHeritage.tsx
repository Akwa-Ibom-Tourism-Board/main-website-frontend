import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CultureHeritage = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-secondary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Culture & Heritage
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Rich traditions, vibrant festivals, and timeless customs
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              The People
            </h2>
            <p className="text-muted-foreground mb-8">
              The people of Akwa Ibom State are predominantly Ibibio, with significant populations 
              of Annang and Oron people. These ethnic groups share common linguistic and cultural 
              ties, united by their rich traditions, hospitality, and strong family values.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Traditional Festivals
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Ekpe Festival</h3>
                <p className="text-sm text-muted-foreground">
                  An ancient masquerade festival celebrating the Ekpe secret society, 
                  featuring elaborate costumes and traditional music.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Ekong Festival</h3>
                <p className="text-sm text-muted-foreground">
                  A warrior festival celebrating bravery and military prowess, 
                  with dance performances and cultural displays.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Ekombi Dance</h3>
                <p className="text-sm text-muted-foreground">
                  A graceful traditional dance performed by maidens, symbolizing 
                  beauty, elegance, and cultural pride.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">New Yam Festival</h3>
                <p className="text-sm text-muted-foreground">
                  A harvest celebration marking the beginning of the new yam season, 
                  featuring thanksgiving and communal feasting.
                </p>
              </div>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Arts & Crafts
            </h2>
            <p className="text-muted-foreground mb-8">
              Akwa Ibom is renowned for its artistic heritage, including intricate wood carvings, 
              especially the famous Ekpu ancestral figures of the Oron people. Traditional crafts 
              include raffia weaving, pottery, and beadwork that continue to be practiced and 
              celebrated today.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Music & Dance
            </h2>
            <p className="text-muted-foreground">
              Traditional music features instruments like the ekwe (slit drum), ubom (talking drum), 
              and the iconic Afang wooden xylophone. These instruments accompany various dances 
              that tell stories of history, celebration, and community life.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CultureHeritage;
