import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import tourOperators from '../../assets/tour-operators.jpg';

const TourOperators = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary/10 mt-[7.5rem]">
        <div
  className="
    absolute inset-0
    bg-cover bg-top
  "
   style={{ backgroundImage: `url(${tourOperators})` }}
/>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Tour Operators
          </h1>
          <p className="text-lg text-[#e37333] max-w-2xl mx-auto animate-fade-in">
            Discover certified tour operators in Akwa Ibom State
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Licensed Tour Operators
            </h2>
            <p className="text-muted-foreground mb-8">
              Akwa Ibom State is home to a number of licensed and professional tour operators 
              who are dedicated to providing visitors with memorable experiences. These operators 
              are certified by the Akwa Ibom State Hotels and Tourism Board and adhere to the 
              highest standards of service delivery.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2">Tour Company {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Professional tour services across Akwa Ibom State with experienced guides.
                  </p>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Licensed Operator
                  </span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              How to Choose a Tour Operator
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Verify their license with the Tourism Board</li>
              <li>Check reviews and testimonials from previous clients</li>
              <li>Ensure they have proper insurance coverage</li>
              <li>Compare prices and services offered</li>
              <li>Ask about their experience with specific destinations</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourOperators;
