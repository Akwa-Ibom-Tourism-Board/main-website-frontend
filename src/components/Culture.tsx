import { Music, Palette, Calendar, Users } from "lucide-react";
import cultureImg from "@/assets/culture.jpg";

const Culture = () => {
  const highlights = [
    {
      icon: Music,
      title: "Traditional Music & Dance",
      description: "Experience the rhythmic beats of Ekpo and Ekombi dances",
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Discover handwoven baskets, pottery, and wood carvings",
    },
    {
      icon: Calendar,
      title: "Cultural Festivals",
      description: "Join vibrant celebrations like the Christmas Village Festival",
    },
    {
      icon: Users,
      title: "Local Communities",
      description: "Meet warm, welcoming people proud of their heritage",
    },
  ];

  return (
    <section id="culture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant h-[500px]">
            <img 
              src={cultureImg} 
              alt="Cultural performance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rich Cultural Heritage
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Immerse yourself in the vibrant traditions, art, and customs of the Ibibio, Annang, 
              and Oron people that make Akwa Ibom unique.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex space-x-4 p-4 rounded-lg hover:bg-background transition-colors"
                  >
                    <div className="flex-shrink-0 bg-secondary text-secondary-foreground p-3 rounded-lg h-fit">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
