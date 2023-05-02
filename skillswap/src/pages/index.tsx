// src/pages/index.tsx
import React from 'react';
import Head from 'next/head';
import HomePageContent from '../components/HomePageContent/HomePageContent';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>SkillSwap - Home</title>
        <meta name="description" content="SkillSwap - Find and exchange skills with people around you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePageContent />
      </main>
    </div>
  );
};

export default Home;


