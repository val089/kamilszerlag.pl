import { Title } from '../Title';
import Image from 'next/image';
import classes from './PortfolioSection.module.scss';
import { PortfolioItemType } from '../../types';

type PortfolioSectionProps = {
  portfolio: PortfolioItemType[];
};

export const PortfolioSection = ({ portfolio }: PortfolioSectionProps) => {
  return (
    <section className={`${classes.portfolio} ${classes.section}`} id="portfolio-section">
      <Title title="Portfolio" />

      {portfolio.map((el) => (
        <div key={el.id} className={classes.portfolio_card} id="shop">
          <div className={classes.portfolio_info_container}>
            <h2 className={classes.portfolio_title}>{el.title}</h2>
            <p className={classes.portfolio_description}>{el.description}</p>
            <ul className={classes.portfolio_items_list}>
              {el.githubUrl && (
                <li className={classes.portfolio_item}>
                  <a
                    className={classes.portfolio_link}
                    href={el.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </a>
                </li>
              )}
              {el.liveUrl && (
                <li className={classes.portfolio_item}>
                  <a
                    className={classes.portfolio_link}
                    href={el.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE
                  </a>
                </li>
              )}
            </ul>
            <div className={classes.portfolio_techs_container}>
              {el.technologies.map((el) => (
                <span
                  key={el}
                  className={`${classes.portfolio_tech} ${classes.portfolio_tech_bg2}`}
                >
                  {el}
                </span>
              ))}
            </div>
          </div>
          <div className={classes.portfolio_image_container}>
            {el.images.map((el) => (
              <div key={el.id} className={classes.portfolio_image_item}>
                <Image
                  src={el.url}
                  width={el.width}
                  height={el.height}
                  alt="phone which displays shop application"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
