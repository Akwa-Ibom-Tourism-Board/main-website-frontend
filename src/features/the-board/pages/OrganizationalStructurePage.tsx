import { PageShell, PageHeroBanner, Container } from "@/shared/components";
import {
  ContentSection,
  Inner,
  ChartBlock,
  ChairmanRow,
  ChairmanCard,
  ChairmanCardTitle,
  ChairmanCardSubtitle,
  ConnectorRow,
  Connector,
  DeptGrid,
  DeptChip,
  DeptChipHead,
  DeptChipName,
  SectionTitle,
  DeptDetailGrid,
  DeptCard,
  DeptCardRow,
  DeptIndexBadge,
  DeptIndexNumber,
  DeptCardName,
  DeptCardHead,
  DeptCardDescription,
} from "./OrganizationalStructurePage.styles";

const departments = [
  {
    name: "Office of the Chairman",
    head: "The Chairman",
    description: "Overall leadership and strategic direction of the commission.",
  },
  {
    name: "Administration & Human Resources",
    head: "Director, Admin & HR",
    description: "Personnel management, administrative operations, and staff welfare.",
  },
  {
    name: "Tourism Development",
    head: "Director, Tourism",
    description: "Development of tourism attractions and promotion of destinations.",
  },
  {
    name: "Hotels & Hospitality",
    head: "Director, Hotels",
    description: "Regulation and licensing of hotels and hospitality establishments.",
  },
  {
    name: "Marketing & Publicity",
    head: "Director, Marketing",
    description: "Marketing campaigns, public relations, and brand promotion.",
  },
  {
    name: "Finance & Accounts",
    head: "Director, Finance",
    description: "Financial management, budgeting, and accounting services.",
  },
  {
    name: "Research & Statistics",
    head: "Director, Research",
    description: "Data collection, analysis, and tourism research.",
  },
];

const OrganizationalStructurePage = () => {
  return (
    <PageShell>
      <PageHeroBanner
        title="Organizational Structure"
        subtitle="Our team dedicated to tourism excellence"
        tint="scene"
        titleColor="white"
        subtitleColor="white"
      />

      <ContentSection>
        <Container>
          <Inner>
            {/* Org Chart Visual */}
            <ChartBlock>
              <ChairmanRow>
                <ChairmanCard>
                  <ChairmanCardTitle>The Chairman</ChairmanCardTitle>
                  <ChairmanCardSubtitle>Chief Executive</ChairmanCardSubtitle>
                </ChairmanCard>
              </ChairmanRow>
              <ConnectorRow>
                <Connector />
              </ConnectorRow>
              <DeptGrid>
                {departments.slice(1, 5).map((dept, index) => (
                  <DeptChip key={index}>
                    <DeptChipHead>{dept.head}</DeptChipHead>
                    <DeptChipName>{dept.name.split("&")[0]}</DeptChipName>
                  </DeptChip>
                ))}
              </DeptGrid>
            </ChartBlock>

            {/* Department Details */}
            <SectionTitle>Departments & Units</SectionTitle>
            <DeptDetailGrid>
              {departments.map((dept, index) => (
                <DeptCard key={index}>
                  <DeptCardRow>
                    <DeptIndexBadge>
                      <DeptIndexNumber>{index + 1}</DeptIndexNumber>
                    </DeptIndexBadge>
                    <div>
                      <DeptCardName>{dept.name}</DeptCardName>
                      <DeptCardHead>{dept.head}</DeptCardHead>
                      <DeptCardDescription>{dept.description}</DeptCardDescription>
                    </div>
                  </DeptCardRow>
                </DeptCard>
              ))}
            </DeptDetailGrid>
          </Inner>
        </Container>
      </ContentSection>
    </PageShell>
  );
};

export default OrganizationalStructurePage;
