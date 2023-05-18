import { InferGetStaticPropsType } from 'next';
import { apolloClient } from '../../graphql/apolloClient';
import {
  GetPortfolioSlugDocument,
  GetPortfolioSlugQuery,
  GetProjectBySlugDocument,
  GetProjectBySlugQuery,
  GetProjectBySlugQueryVariables,
} from '@app/generated/graphql';

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
    return <div>Coś poszło nie tak...</div>;
  }

  return <h1 style={{ color: '#fff', fontSize: 40 }}>{project.title}</h1>;
};

export default Project;
