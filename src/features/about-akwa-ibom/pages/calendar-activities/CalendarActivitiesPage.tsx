import { Calendar, MapPin, Clock } from "lucide-react";
import { PageShell, PageHeroBanner } from "@/shared/components";
import { useTheme } from "@/theme";
import {
  ContentSection,
  Inner,
  IntroBlock,
  IntroTitle,
  IntroText,
  MonthList,
  MonthCard,
  MonthHeader,
  MonthTitle,
  MonthBody,
  EventRow,
  EventName,
  EventMeta,
  MetaItem,
  LearnMoreButton,
} from "./CalendarActivitiesPage.styles";

const events = [
  {
    month: "January",
    events: [{ name: "New Year Beach Festival", date: "Jan 1-3", location: "Ibeno Beach" }],
  },
  {
    month: "February",
    events: [{ name: "Valentine Beach Party", date: "Feb 14", location: "Ibeno Beach" }],
  },
  {
    month: "March",
    events: [{ name: "Women's Day Celebration", date: "Mar 8", location: "Uyo" }],
  },
  {
    month: "April",
    events: [{ name: "Easter Beach Carnival", date: "Varies", location: "Ibeno Beach" }],
  },
  {
    month: "August",
    events: [{ name: "Calabar-Itu Festival", date: "Aug 15-20", location: "Itu" }],
  },
  {
    month: "September",
    events: [{ name: "State Anniversary Celebration", date: "Sep 23", location: "Uyo" }],
  },
  {
    month: "October",
    events: [{ name: "Tourism Week", date: "Oct 1-7", location: "Statewide" }],
  },
  {
    month: "December",
    events: [
      { name: "Christmas Carnival", date: "Dec 20-31", location: "Uyo" },
      { name: "New Year's Eve Beach Party", date: "Dec 31", location: "Ibeno Beach" },
    ],
  },
];

const CalendarActivitiesPage = () => {
  const theme = useTheme();

  return (
    <PageShell>
      <PageHeroBanner
        title="Calendar of Activities"
        subtitle="Plan your visit around our exciting events and festivals"
        tint="scene"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Inner>
          <IntroBlock>
            <IntroTitle>Annual Events & Festivals</IntroTitle>
            <IntroText>
              Akwa Ibom State hosts numerous events throughout the year. Plan your visit to coincide with these
              exciting celebrations.
            </IntroText>
          </IntroBlock>

          <MonthList>
            {events.map((monthData, index) => (
              <MonthCard key={index}>
                <MonthHeader>
                  <MonthTitle>
                    <Calendar size={20} color={theme.colors.primary.DEFAULT} />
                    {monthData.month}
                  </MonthTitle>
                </MonthHeader>
                <MonthBody>
                  {monthData.events.map((event, i) => (
                    <EventRow key={i} $divider={i > 0}>
                      <div>
                        <EventName>{event.name}</EventName>
                        <EventMeta>
                          <MetaItem>
                            <Clock size={16} /> {event.date}
                          </MetaItem>
                          <MetaItem>
                            <MapPin size={16} /> {event.location}
                          </MetaItem>
                        </EventMeta>
                      </div>
                      <LearnMoreButton>Learn More →</LearnMoreButton>
                    </EventRow>
                  ))}
                </MonthBody>
              </MonthCard>
            ))}
          </MonthList>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default CalendarActivitiesPage;
