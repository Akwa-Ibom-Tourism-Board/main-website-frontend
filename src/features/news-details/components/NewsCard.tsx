import { ArrowRight } from "lucide-react";
import type { NewsItem } from "../types";
import { NewsCardEl, ImageWrap, Image, CategoryBadge, Body, Date, CardTitle, Description, ReadMore } from "./NewsGrid.styles";

interface NewsCardProps {
  item: NewsItem;
  onClick: () => void;
  style?: React.CSSProperties;
}

const NewsCard = ({ item, onClick, style }: NewsCardProps) => (
  <NewsCardEl onClick={onClick} style={style}>
    <ImageWrap>
      <Image src={item.image} alt={item.title} />
      <CategoryBadge>{item.category}</CategoryBadge>
    </ImageWrap>
    <Body>
      <Date>{item.date}</Date>
      <CardTitle>{item.title}</CardTitle>
      <Description>{item.description}</Description>
      <ReadMore>
        Read More <ArrowRight size={16} />
      </ReadMore>
    </Body>
  </NewsCardEl>
);

export default NewsCard;
