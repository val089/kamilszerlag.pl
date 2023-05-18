import { HeroSection } from '../components/HeroSection';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components/Layout';
import { PortfolioSection } from '../components/PortfolioSection';
// import { SkillsSection } from '../components/SkillsSection';
import { apolloClient } from '../graphql/apolloClient';
import { Footer } from '../components/Footer';
import { GetMyPortfolioDocument, GetMyPortfolioQuery } from '@app/generated/graphql';

const Home = ({ portfolioData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <HeroSection />
      {/* <SkillsSection /> */}
      {!!portfolioData?.portfolio?.length && (
        <PortfolioSection portfolio={portfolioData.portfolio} />
      )}
      <Footer />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetMyPortfolioQuery>({
    query: GetMyPortfolioDocument,
  });

  return {
    props: {
      portfolioData: data,
    },
  };
};

export default Home;
