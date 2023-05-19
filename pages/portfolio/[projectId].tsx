import { InferGetStaticPropsType } from 'next';
import { apolloClient } from '../../graphql/apolloClient';
import {
  GetPortfolioSlugDocument,
  GetPortfolioSlugQuery,
  GetProjectBySlugDocument,
  GetProjectBySlugQuery,
  GetProjectBySlugQueryVariables,
} from '@app/generated/graphql';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Project.module.scss';
import { ArrowLeftIcon } from '@app/assets/icons/ArrowLeftIcon';

export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetPortfolioSlugQuery>({
    query: GetPortfolioSlugDocument,
  });

  return {
    paths: data.portfolio.map((project) => {
      return {
        params: {
          projectId: project.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.projectId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<GetProjectBySlugQuery, GetProjectBySlugQueryVariables>({
    variables: { slug: params.projectId },
    query: GetProjectBySlugDocument,
  });

  if (!data.project) {
    return {
      props: {},
      notFound: true,
    };
  }

  const project = data.project;

  return {
    props: {
      project,
    },
  };
};

const Project = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!project) {
    return <div>Something went wrong...</div>;
  }

  console.log(project);

  return (
    <section>
      <div className={classes.innerContainer}>
        <Link href="/" passHref legacyBehavior>
          <a className={classes.backLink}>
            <ArrowLeftIcon className={classes.backIcon} />
            <p>Back to home</p>
          </a>
        </Link>

        <div className={classes.contentContainer}>
          <div>
            <h3 className={classes.title}>{project.title}</h3>
            <p className={classes.technologiesTitle}>Technologies:</p>
            <div className={classes.technologiesList}>
              {!!project.technologies.length &&
                project.technologies.map((item) => (
                  <p key={item} className={classes.technologyItem}>
                    {item}
                  </p>
                ))}
            </div>
            <p className={classes.description}>{project.description}</p>
          </div>
          <div className={classes.imageContainer}>
            {project.projectImage && (
              <Image
                src={project.projectImage.url ?? ''}
                width={project.projectImage.width ?? 100}
                height={project.projectImage.height ?? 100}
                alt="image"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
