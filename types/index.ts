export type ImageItemType = {
  id: string;
  url: string;
  width?: number | null;
  height?: number | null;
};

export type PortfolioItemType = {
  createdAt: string;
  githubUrl: string;
  description: string;
  id: string;
  slug: string;
  technologies: string[];
  title: string;
  updatedAt: string;
  cardImage: ImageItemType;
  publishedAt?: string | null;
  liveUrl?: string | null;
  projectImage?: ImageItemType;
};

export type GetPortfolioResponse = {
  portfolio: PortfolioItemType[];
};
