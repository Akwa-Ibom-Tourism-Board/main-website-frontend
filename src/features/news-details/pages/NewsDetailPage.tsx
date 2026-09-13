import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/shared/ui";
import { PageShell } from "@/shared/components";
import { newsData } from "../api/newsData";
import {
  HeroImageSection,
  HeroImageLayer,
  HeroImage,
  HeroScrim,
  ContentSection,
  Inner,
  Card,
  MetaRow,
  MetaDate,
  CategoryTag,
  ArticleTitle,
  ArticleBody,
  Paragraph,
} from "./NewsDetailPage.styles";

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageShell>
      <HeroImageSection>
        <HeroImageLayer>
          <HeroImage src={newsItem.image} alt={newsItem.title} />
          <HeroScrim />
        </HeroImageLayer>
      </HeroImageSection>

      <ContentSection>
        <Inner>
          <Link to="/">
            <Button variant="secondary" style={{ marginBottom: "1.5rem", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>

          <Card>
            <MetaRow>
              <MetaDate>
                <Calendar size={16} />
                {newsItem.date}
              </MetaDate>
              <CategoryTag>
                <Tag size={14} />
                {newsItem.category}
              </CategoryTag>
            </MetaRow>

            <ArticleTitle>{newsItem.title}</ArticleTitle>

            <ArticleBody>
              {newsItem.fullContent.split("\n\n").map((paragraph, index) => (
                <Paragraph key={index}>{paragraph}</Paragraph>
              ))}
            </ArticleBody>
          </Card>
        </Inner>
      </ContentSection>
    </PageShell>
  );
};

export default NewsDetailPage;
