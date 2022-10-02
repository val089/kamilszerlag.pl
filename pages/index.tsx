import { HeroSection } from '../components/HeroSection';
// import styles from '../styles/Home.module.scss';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components/Layout';
import { PortfolioSection } from '../components/PortfolioSection';
import { SkillsSection } from '../components/SkillsSection';
import { gql } from '@apollo/client';
import { apolloClient } from '../graphql/apolloClient';
import { GetPortfolioResponse } from '../types';
import { Footer } from '../components/Footer';

const getMyPortfolio = gql`
  query GetMyPortfolio {
    portfolio {
      createdAt
      githubUrl
      liveUrl
      description
      id
      publishedAt
      slug
      technologies
      title
      updatedAt
      images {
        url
        id
        height
        width
      }
    }
  }
`;

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      {data?.portfolio?.length > 0 && <PortfolioSection portfolio={data.portfolio} />}
      <Footer />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetPortfolioResponse>({
    query: getMyPortfolio,
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
