// src/components/HomePageContent/HomePageContent.tsx
import React from 'react';
import Link from 'next/link';
import styles from './HomePageContent.module.css';

const HomePageContent: React.FC = () => {
  return (
    <>
      <section className={styles.hero}>
        <h1 className="text-center text-5xl font-bold mb-6">Welcome to SkillSwap!</h1>
        <p className="text-center text-xl mb-8">Find and exchange skills with people around you.</p>
        <div className="text-center">
          <Link href="/register">
            <span className={styles.callToAction}>Get Started</span>
          </Link>
        </div>
      </section>

      <section className={styles.intro}>
        <h2 className="text-center text-3xl font-bold mb-6">What is SkillSwap?</h2>
        <p className="text-center text-xl mb-8">
          SkillSwap is a platform that connects people who want to learn new skills with others who can teach them.
          Find people in your area who are looking for your skills, or search for someone who can teach you something
          new!
        </p>
      </section>
    </>
  );
};

export default HomePageContent;
