import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutAkwaIbom = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary/10 mt-[7.5rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            About Akwa Ibom State
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Land of Promise - Nigeria's Oil Rich State
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-muted-foreground mb-8">
              Akwa Ibom State is one of the 36 states of Nigeria, located in the South-South 
              geopolitical zone. Created on September 23, 1987 from the former Cross River State, 
              Akwa Ibom is known as the "Land of Promise" and is the largest oil and gas producing 
              state in Nigeria.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Capital:</strong> Uyo</li>
                  <li><strong>Population:</strong> ~5.5 million</li>
                  <li><strong>Area:</strong> 7,081 km²</li>
                  <li><strong>Local Government Areas:</strong> 31</li>
                  <li><strong>Major Languages:</strong> Ibibio, Annang, Oron</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Geography</h3>
                <p className="text-muted-foreground">
                  The state is bordered by Cross River State to the east, Rivers State and Abia State 
                  to the west, and the Atlantic Ocean to the south. Its coastline extends about 
                  129 kilometers, featuring the longest beach in West Africa at Ibeno.
                </p>
              </div>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Economy
            </h2>
            <p className="text-muted-foreground mb-8">
              Akwa Ibom State is the largest oil and gas producing state in Nigeria, contributing 
              significantly to the nation's petroleum output. Beyond oil, the state has a thriving 
              agricultural sector, producing palm oil, cassava, cocoa, rubber, and various tropical 
              fruits. The Ibom Industrial City project aims to diversify the economy through 
              manufacturing and industrialization.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Infrastructure
            </h2>
            <p className="text-muted-foreground">
              The state boasts modern infrastructure including the Victor Attah International Airport, 
              the Ibom Power Plant, excellent road networks, and the under-construction Ibom Deep 
              Seaport. The Ibom Icon Hotel & Golf Resort represents the state's commitment to 
              world-class tourism infrastructure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutAkwaIbom;
