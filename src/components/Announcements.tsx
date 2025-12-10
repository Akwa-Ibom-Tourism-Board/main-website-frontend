import { useState, useEffect, useRef } from "react";
import { X, Calendar, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Announcement {
  id: number;
  title: string;
  preview: string;
  fullText: string;
  date: string;
  link?: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "2025 Tourism Festival Announced",
    preview: "Join us for the biggest tourism celebration in the South-South region...",
    fullText: "The Akwa Ibom State Hotels and Tourism Board is excited to announce the 2025 Tourism Festival, scheduled to take place from December 15-22. This year's festival promises to be the biggest celebration of culture, hospitality, and tourism in the South-South region. Activities include cultural performances, food festivals, beach carnivals, and hotel exhibitions. All registered hotels and tour operators are invited to participate.",
    date: "November 15, 2025",
    link: "https://akwaibomtourism.com/festival"
  },
  {
    id: 2,
    title: "New Hotel Registration Guidelines",
    preview: "Updated requirements for hotel operators seeking registration...",
    fullText: "The Board has released updated guidelines for hotel registration effective January 2025. All hotel operators must ensure compliance with the new safety standards, hygiene protocols, and service quality benchmarks. Applications can be submitted online through our portal. Existing registered hotels have until March 2025 to update their documentation.",
    date: "November 10, 2025"
  },
  {
    id: 3,
    title: "Beach Safety Campaign Launch",
    preview: "New initiative to enhance safety at all public beaches...",
    fullText: "In partnership with the State Emergency Management Agency, we are launching a comprehensive beach safety campaign. This includes deployment of lifeguards, installation of warning signs, and establishment of designated swimming zones at Ibeno Beach and other popular coastal destinations. The campaign aims to ensure visitor safety while promoting beach tourism.",
    date: "November 5, 2025"
  },
  {
    id: 4,
    title: "Tourism Training Workshop",
    preview: "Capacity building program for hospitality professionals...",
    fullText: "A three-day intensive workshop for hospitality professionals will be held at Le Meridien Ibom Hotel. Topics include customer service excellence, digital marketing for tourism, sustainable tourism practices, and crisis management. Certificates will be awarded to all participants. Registration is free for licensed operators.",
    date: "October 28, 2025",
    link: "https://akwaibomtourism.com/workshop"
  },
  {
    id: 5,
    title: "International Partnership Signed",
    preview: "New MOU with international tourism bodies to boost visibility...",
    fullText: "Akwa Ibom State has signed a Memorandum of Understanding with the African Tourism Board and World Tourism Organization to enhance international visibility and attract foreign tourists. This partnership will facilitate capacity building, marketing collaborations, and exchange programs for tourism professionals.",
    date: "October 20, 2025"
  }
];

const Announcements = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Events & Conferences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest events and conferences from the Akwa Ibom Hotels and Tourism Board
          </p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6" style={{ width: "fit-content" }}>
            {/* Duplicate announcements for seamless loop */}
            {[...announcements, ...announcements].map((announcement, index) => (
              <div
                key={`${announcement.id}-${index}`}
                onClick={() => setSelectedAnnouncement(announcement)}
                className="w-80 flex-shrink-0 bg-card rounded-xl p-6 shadow-lg hover:shadow-xl 
                  transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-border
                  hover:border-secondary/50"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  <span>{announcement.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {announcement.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {announcement.preview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-primary">
              {selectedAnnouncement?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>{selectedAnnouncement?.date}</span>
            </div>
            <p className="text-foreground leading-relaxed">
              {selectedAnnouncement?.fullText}
            </p>
            {selectedAnnouncement?.link && (
              <Button asChild variant="outline" className="w-full">
                <a href={selectedAnnouncement.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Learn More
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Announcements;
