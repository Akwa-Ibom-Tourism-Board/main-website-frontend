import { useNavigate } from "react-router-dom";
import { Container } from "@/shared/components";
import { newsData } from "../api/newsData";
import NewsCard from "./NewsCard";
import { Section, Heading, Eyebrow, Title, Lede, Grid } from "./NewsGrid.styles";

const NewsGrid = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Heading>
          <Eyebrow>What&apos;s Happening</Eyebrow>
          <Title>Latest News</Title>
          <Lede>
            Discover the latest developments, success stories, and milestones in Akwa Ibom tourism
          </Lede>
        </Heading>

        <Grid>
          {newsData.map((item, index) => (
            <NewsCard
              key={item.id}
              item={item}
              onClick={() => navigate(`/news/${item.id}`)}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default NewsGrid;
