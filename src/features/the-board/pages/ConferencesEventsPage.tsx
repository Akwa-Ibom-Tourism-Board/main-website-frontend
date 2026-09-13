import { Calendar, Users, MapPin } from "lucide-react";
import { PageShell, PageHeroBanner, Container } from "@/shared/components";
import {
  ContentSection,
  Inner,
  SectionBlock,
  SectionTitle,
  UpcomingGrid,
  UpcomingCard,
  UpcomingBadge,
  EventTitle,
  PastEventTitle,
  EventDescription,
  EventMetaRow,
  EventMetaItem,
  PastEventsList,
  PastEventCard,
  PastEventRow,
  PastEventThumb,
  PastEventBody,
} from "./ConferencesEventsPage.styles";

const pastEvents = [
  {
    title: "Tourism Investment Summit 2024",
    date: "March 15-17, 2024",
    location: "Ibom Icon Hotel",
    attendees: "500+",
    description: "Annual summit bringing together investors, stakeholders, and tourism professionals.",
  },
  {
    title: "Hospitality Training Workshop",
    date: "February 8, 2024",
    location: "Le Meridien Hotel, Uyo",
    attendees: "200+",
    description: "Capacity building workshop for hotel and hospitality industry workers.",
  },
  {
    title: "Beach Tourism Conference",
    date: "January 20, 2024",
    location: "Ibeno Beach Resort",
    attendees: "300+",
    description: "Conference focused on developing and promoting beach tourism in the state.",
  },
];

const upcomingEvents = [
  {
    title: "Annual Tourism Awards",
    date: "December 2024",
    location: "To be announced",
    description: "Celebrating excellence in the tourism and hospitality sector.",
  },
  {
    title: "Heritage Sites Forum",
    date: "Q1 2025",
    location: "National Museum, Uyo",
    description: "Forum on preserving and promoting Akwa Ibom's heritage sites.",
  },
];

const ConferencesEventsPage = () => {
  return (
    <PageShell>
      <PageHeroBanner
        title="Conferences & Events"
        subtitle="Building partnerships and advancing tourism development"
        tint="panel"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Container>
          <Inner>
            <SectionBlock>
              <SectionTitle>Upcoming Events</SectionTitle>
              <UpcomingGrid>
                {upcomingEvents.map((event, index) => (
                  <UpcomingCard key={index}>
                    <UpcomingBadge>Upcoming</UpcomingBadge>
                    <EventTitle>{event.title}</EventTitle>
                    <EventDescription>{event.description}</EventDescription>
                    <EventMetaRow>
                      <EventMetaItem>
                        <Calendar size={16} /> {event.date}
                      </EventMetaItem>
                      <EventMetaItem>
                        <MapPin size={16} /> {event.location}
                      </EventMetaItem>
                    </EventMetaRow>
                  </UpcomingCard>
                ))}
              </UpcomingGrid>
            </SectionBlock>

            <SectionBlock>
              <SectionTitle>Past Events</SectionTitle>
              <PastEventsList>
                {pastEvents.map((event, index) => (
                  <PastEventCard key={index}>
                    <PastEventRow>
                      <PastEventThumb />
                      <PastEventBody>
                        <PastEventTitle>{event.title}</PastEventTitle>
                        <EventDescription>{event.description}</EventDescription>
                        <EventMetaRow>
                          <EventMetaItem>
                            <Calendar size={16} /> {event.date}
                          </EventMetaItem>
                          <EventMetaItem>
                            <MapPin size={16} /> {event.location}
                          </EventMetaItem>
                          <EventMetaItem>
                            <Users size={16} /> {event.attendees} attendees
                          </EventMetaItem>
                        </EventMetaRow>
                      </PastEventBody>
                    </PastEventRow>
                  </PastEventCard>
                ))}
              </PastEventsList>
            </SectionBlock>
          </Inner>
        </Container>
      </ContentSection>
    </PageShell>
  );
};

export default ConferencesEventsPage;
