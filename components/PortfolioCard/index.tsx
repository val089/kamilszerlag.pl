import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './PortfolioCard.module.scss';
import { ImageItemType } from '../../types';

interface PortfolioCardProps {
  title: string;
  image: ImageItemType | null | undefined;
  slug: string;
  description?: string;
}

export const PortfolioCard = ({ slug, title, image, description = '' }: PortfolioCardProps) => {
  return (
    <article className={classes.article}>
      <div className={classes.article_wrapper}>
        <figure className={classes.figure}>
          {image?.url ? (
            <Image
              src={image.url ?? 'https://picsum.photos/id/1011/800/450'}
              width={800}
              height={450}
              alt="phone which displays shop application"
            />
          ) : (
            <p>Image is missing</p>
          )}
        </figure>
        <div className={classes.article_body}>
          <h2>{title}</h2>
          <p>{description}</p>

          <Link href={`/portfolio/${slug}`}>
            <a href="#" className={classes.read_more}>
              Read more <span className={classes.sr_only}>about this is some title</span>
              <svg className={classes.icon} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};
