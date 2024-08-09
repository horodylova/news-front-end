import React, {useState} from 'react';
 import TopicsList from '../../Components/TopicsList/TopicsList';   
import ArticlesList from '../../Components/ArticlesList/ArticlesList'; 
import { PageContainer, Sidebar,   Content } from './TopicsPage.styled'; 

const TopicsPage = () => {

    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState('')

    console.log(selectedTopic, 'on the page');
    return (
        <PageContainer>
          <Sidebar>
            <TopicsList 
            topics={topics} 
            setTopics={setTopics}
            setSelectedTopic={setSelectedTopic}
            selectedTopic={selectedTopic}/>
          </Sidebar>
          <Content>
            <ArticlesList selectedTopic={selectedTopic}/>
          </Content>
        </PageContainer>
      );
};

export default TopicsPage;