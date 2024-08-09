import React, { useContext, useEffect } from 'react';
import { TopicLink } from './TopicsList.styled';
import { fetchTopics } from "../../api";
import { AppContext } from '../../contexts/AppContext';
import Loader from '../Loader/Loader'

const TopicsList = ({ topics, setTopics, selectedTopic, setSelectedTopic }) => {
  
  const {loading, setLoading } = useContext(AppContext)
  useEffect(() => { 
    setLoading(true);
    fetchTopics()
      .then((response) => {
        setTopics(response.topics);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [setTopics]);

  function handleTopic(topicSlug) {
    setSelectedTopic(topicSlug); 
    console.log(selectedTopic, 'at the topicslist');
  }
  if (loading) return <Loader />;

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

