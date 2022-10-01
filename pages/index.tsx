import type { NextPage } from 'next';
import { HeroSection } from '../components/HeroSection';
// import styles from '../styles/Home.module.scss';
import { Layout } from '../components/Layout';
import { SkillsSection } from '../components/SkillsSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <div style={{ height: 1000 }} />
    </Layout>
  );
};

export default Home;
