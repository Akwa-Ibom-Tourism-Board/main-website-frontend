import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import culture from "@/assets/culture.jpg";
import hotel from "@/assets/hotel.jpg";
import nature from "@/assets/nature.jpg";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fullContent: string;
  date: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: "tourism-awards-2024",
    title: "Akwa Ibom Wins Best Tourism Destination Award",
    description: "The state has been recognized as the most tourist-friendly destination in Nigeria for the third consecutive year.",
    image: heroBeach,
    fullContent: `Akwa Ibom State has once again emerged as the winner of the prestigious Nigerian Tourism Award for the Best Tourism Destination in Nigeria. This marks the third consecutive year the state has claimed this honor, cementing its position as the country's premier tourism hub.

The award ceremony, held at the Transcorp Hilton in Abuja, saw tourism stakeholders from across the nation gather to celebrate excellence in the industry. Akwa Ibom State was recognized for its outstanding infrastructure development, hospitality services, and commitment to sustainable tourism practices.

Governor Umo Eno, represented by the Commissioner for Culture and Tourism, expressed gratitude for the recognition, stating that the government remains committed to making Akwa Ibom the preferred destination for both domestic and international tourists.

Key factors that contributed to this achievement include:
- World-class hospitality facilities including the 5-star Le Meridien Ibom Hotel & Golf Resort
- Beautiful beaches at Ibeno, one of the longest sand beaches in West Africa
- Rich cultural heritage and festivals
- Improved security and tourist-friendly policies
- Investment in tourism infrastructure and capacity building

The Hotels and Tourism Board has announced plans to leverage this recognition to attract more international visitors and investments to the state.`,
    date: "November 12, 2024",
    category: "Achievement"
  },
  {
    id: "new-resort-opening",
    title: "New Eco-Resort Opens at Ibeno Beach",
    description: "A state-of-the-art eco-friendly resort brings sustainable luxury to Akwa Ibom's coastline.",
    image: hotel,
    fullContent: `A new chapter in sustainable tourism has begun with the grand opening of the Ibeno Eco-Resort, a world-class facility designed to offer luxury accommodation while maintaining environmental responsibility.

The resort, strategically located along the pristine Ibeno Beach, features 50 eco-friendly chalets built with sustainable materials and powered by solar energy. The development represents a N5 billion investment and is expected to create over 200 direct jobs for indigenes.

Facilities include:
- 50 luxury eco-chalets with ocean views
- Organic restaurant featuring local cuisine
- Water sports center
- Spa and wellness center using natural products
- Conference facilities for business tourism
- Marine conservation education center

The resort operates on principles of sustainable tourism, including:
- Zero single-use plastics policy
- Rainwater harvesting systems
- Local community engagement programs
- Marine life protection initiatives

The Governor commended the investors for their commitment to sustainable development and assured continued government support for such initiatives that align with the state's vision for responsible tourism growth.`,
    date: "November 8, 2024",
    category: "Development"
  },
  {
    id: "cultural-festival-success",
    title: "Ibom Cultural Festival Attracts 50,000 Visitors",
    description: "The annual celebration of Akwa Ibom heritage drew record attendance from across Africa.",
    image: culture,
    fullContent: `The 2024 edition of the Ibom Cultural Festival has been declared the most successful in its history, attracting over 50,000 visitors from Nigeria and across Africa over its seven-day duration.

The festival, organized by the Akwa Ibom State Hotels and Tourism Board in partnership with the Ministry of Culture and Tourism, showcased the rich cultural heritage of the state through various activities:

Highlights included:
- Traditional dance competitions featuring all 31 local government areas
- Culinary exhibitions showcasing Ibibio, Annang, and Oron cuisines
- Traditional fashion parade and beauty pageants
- Historical exhibitions and storytelling sessions
- Live performances by local and international artists
- Traditional games and sports competitions

Economic impact:
- Hotel occupancy rates reached 95% during the festival period
- Estimated N2.5 billion generated in tourism revenue
- Over 5,000 temporary jobs created
- Significant boost for local artisans and food vendors

The Commissioner for Culture and Tourism announced that planning has already begun for the 2025 edition, which will be expanded to include more international participation and cultural exchange programs.`,
    date: "October 30, 2024",
    category: "Events"
  },
  {
    id: "tourism-training-program",
    title: "500 Youth Graduate from Tourism Training Program",
    description: "Young professionals equipped with skills to drive the state's hospitality industry forward.",
    image: nature,
    fullContent: `The Akwa Ibom Hotels and Tourism Board has successfully graduated 500 young professionals from its comprehensive Tourism and Hospitality Training Program, a initiative designed to build local capacity in the tourism sector.

The six-month intensive program covered various aspects of the hospitality industry:

Curriculum highlights:
- Hotel operations and management
- Tour guiding and destination management
- Food and beverage service
- Customer service excellence
- Digital marketing for tourism
- Sustainable tourism practices
- First aid and safety management

The program was delivered in partnership with:
- Nigerian Institute of Hospitality and Tourism
- Le Meridien Ibom Hotel & Golf Resort
- International Tourism Organizations

Employment outcomes:
- 60% of graduates already placed in hospitality establishments
- 20% starting their own tourism-related businesses
- Remaining graduates undergoing further specialized training

The Chairman of the Board announced plans to expand the program to accommodate 1,000 participants annually, with the goal of making Akwa Ibom the human resource capital of the Nigerian tourism industry.

Graduates received certificates and starter kits to help them begin their careers in the hospitality sector.`,
    date: "October 22, 2024",
    category: "Capacity Building"
  }
];

const NewsAchievements = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            What's Happening
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Latest News
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest developments, success stories, and milestones in Akwa Ibom tourism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => navigate(`/news/${item.id}`)}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                transition-all duration-500 cursor-pointer border border-border
                hover:border-secondary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                    group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 
                  line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-secondary font-medium text-sm 
                  group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAchievements;
