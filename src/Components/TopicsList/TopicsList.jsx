import React, { useEffect } from 'react';
import { TopicLink } from './TopicsList.styled';
import { fetchTopics } from "../../api";

const TopicsList = ({ topics, setTopics, selectedTopic, setSelectedTopic }) => {
  useEffect(() => {
    fetchTopics()
      .then((response) => {
        setTopics(response.topics);
      })
      .catch(error => {
        console.error("Failed to fetch topics:", error);
      });
  }, [setTopics]);

  function handleTopic(topicSlug) {
    setSelectedTopic(topicSlug); 
    console.log(selectedTopic, 'at the topicslist');
  }

  return (
    <>
      {topics.map((topic) => (
        <TopicLink 
          key={topic.slug} 
          onClick={() => handleTopic(topic.slug)}    
        >
          {topic.slug}
        </TopicLink>
      ))}
    </>
  );
};

export default TopicsList;

