import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { TopicLink } from './TopicsList.styled';
import { fetchTopics } from "../../api";
import { AppContext } from '../../contexts/AppContext';
import Loader from '../Loader/Loader';

const TopicsList = ({ topics, setTopics, setSelectedTopic }) => {
  
  const { loading, setLoading } = useContext(AppContext);

  useEffect(() => { 
    setLoading(true);
    fetchTopics()
      .then((response) => {
        setTopics(response.topics);
        setLoading(false);
       })
      .catch(error => {
        setLoading(false);
        toast.error(`Failed to fetch topics: ${error.message}`);
      });
  }, [setTopics, setLoading]);

  function handleTopic(topicSlug) {
    setSelectedTopic(topicSlug); 
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


