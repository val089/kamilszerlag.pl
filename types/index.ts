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
  images: ImageItemType;
  cardImage: ImageItemType;
  publishedAt?: string | null;
  liveUrl?: string | null;
};

export type GetPortfolioResponse = {
  portfolio: PortfolioItemType[];
};
