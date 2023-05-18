import { Title } from '../Title';
import classes from './PortfolioSection.module.scss';
import { PortfolioCard } from '../PortfolioCard';
import { GetMyPortfolioQuery } from '@app/generated/graphql';

type PortfolioSectionProps = {
  portfolio: GetMyPortfolioQuery['portfolio'];
};

export const PortfolioSection = ({ portfolio }: PortfolioSectionProps) => {
  return (
    <section className={`${classes.portfolio_section} ${classes.section}`} id="portfolio-section">
      <Title title="Portfolio" />

      <section className={classes.articles}>
        {!!portfolio.length &&
          portfolio.map(({ id, title, cardImage, slug }) => (
            <PortfolioCard key={id} slug={slug} title={title} image={cardImage} />
          ))}
      </section>
    </section>
  );
};
