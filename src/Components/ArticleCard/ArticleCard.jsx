import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Title,
  Author,
  CreatedAt,
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
    <Link to={`/articles/${article_id}`}>
    <Card>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Date>{new Date(created_at).toLocaleDateString()}</Date>
      <Image src={article_img_url} alt={`Image for ${title}`} />
      <Topic>{topic}</Topic>
      <Votes>Votes: {votes}</Votes>
      <CommentCount>Comments: {comment_count}</CommentCount>
    </Card>
  </Link>
  );
}

export default ArticleCard;
