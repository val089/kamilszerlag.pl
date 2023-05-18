/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query GetMyPortfolio {\n  portfolio {\n    createdAt\n    githubUrl\n    liveUrl\n    description\n    id\n    publishedAt\n    slug\n    technologies\n    title\n    updatedAt\n    images {\n      url\n      id\n      height\n      width\n    }\n    cardImage {\n      id\n      url\n      width\n      height\n    }\n  }\n}\n\nquery GetPortfolioSlug {\n  portfolio {\n    slug\n  }\n}\n\nquery GetProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}) {\n    id\n    slug\n    liveUrl\n    technologies\n    title\n    updatedAt\n    publishedAt\n    githubUrl\n    description\n    createdAt\n    images {\n      height\n      id\n      width\n      url\n    }\n  }\n}':
    types.GetMyPortfolioDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetMyPortfolio {\n  portfolio {\n    createdAt\n    githubUrl\n    liveUrl\n    description\n    id\n    publishedAt\n    slug\n    technologies\n    title\n    updatedAt\n    images {\n      url\n      id\n      height\n      width\n    }\n    cardImage {\n      id\n      url\n      width\n      height\n    }\n  }\n}\n\nquery GetPortfolioSlug {\n  portfolio {\n    slug\n  }\n}\n\nquery GetProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}) {\n    id\n    slug\n    liveUrl\n    technologies\n    title\n    updatedAt\n    publishedAt\n    githubUrl\n    description\n    createdAt\n    images {\n      height\n      id\n      width\n      url\n    }\n  }\n}',
): typeof documents['query GetMyPortfolio {\n  portfolio {\n    createdAt\n    githubUrl\n    liveUrl\n    description\n    id\n    publishedAt\n    slug\n    technologies\n    title\n    updatedAt\n    images {\n      url\n      id\n      height\n      width\n    }\n    cardImage {\n      id\n      url\n      width\n      height\n    }\n  }\n}\n\nquery GetPortfolioSlug {\n  portfolio {\n    slug\n  }\n}\n\nquery GetProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}) {\n    id\n    slug\n    liveUrl\n    technologies\n    title\n    updatedAt\n    publishedAt\n    githubUrl\n    description\n    createdAt\n    images {\n      height\n      id\n      width\n      url\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
