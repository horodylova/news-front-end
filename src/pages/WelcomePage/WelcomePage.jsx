import React from 'react';
import { PageContainer, Heading, Article } from './WelcomePage.styled';

function WelcomePage() {
  return (
    <PageContainer>
      <Heading>Welcome to Summer News,</Heading>
      <Article>
        <p>
          your ultimate destination for the latest updates and breaking news. Our dedicated team of authors works around the clock to bring you accurate and timely reports on everything from local events to international affairs. Stay informed with our comprehensive coverage and in-depth analysis.
        </p>
        <p>
          Stay connected with Summer News through our website and social media channels. We provide real-time updates and live coverage of major events, ensuring you never miss out on important news.
        </p>
        <p>Join our community of informed readers and be a part of the conversation.</p>
      </Article>
    </PageContainer>
  );
}

export default WelcomePage;
