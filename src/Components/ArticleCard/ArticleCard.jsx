import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  ContentContainer,
  Title,
  Author,
  DateStyled,
  Image,
  Topic,
  Votes,
  CommentCount,
} from "./ArticleCard.styled";

function ArticleCard({
  article_id,
  title,
  author,
  created_at,
  votes,
  article_img_url,
  topic,
  comment_count,
}) {
  return (
   
      <Card>
        <Image src={article_img_url} alt={`Image for ${title}`} />
        <ContentContainer>
        <Link to={`/articles/${article_id}`}>
        <Title>{title}</Title>
        </Link>
        <Author>{author}</Author>
        <DateStyled>{new Date(created_at).toLocaleDateString()}</DateStyled>
        <Topic>{topic}</Topic>
        <Votes>Votes: {votes}</Votes>
        <CommentCount>Comments: {comment_count}</CommentCount>
        </ContentContainer>
      </Card>
     
  );
}

export default ArticleCard;

