import React from "react";
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
    <Card to={`/articles/${article_id}`}>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <CreatedAt>{new Date(created_at).toLocaleDateString()}</CreatedAt>
      <Image src={article_img_url} alt={`Image for ${title}`} />
      <Topic>{topic}</Topic>
      <Votes>Votes: {votes}</Votes>
      <CommentCount>Comments: {comment_count}</CommentCount>
    </Card>
  );
}

export default ArticleCard;
