import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Wrapper, Content, Code, Message, HomeLink } from "./NotFoundPage.styles";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Content>
        <Code>404</Code>
        <Message>Oops! Page not found</Message>
        <HomeLink href="/">Return to Home</HomeLink>
      </Content>
    </Wrapper>
  );
};

export default NotFoundPage;
