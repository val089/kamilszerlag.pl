export type ImageItemType = {
  id: string;
  url: string;
  width: string;
  height: string;
};

export type PortfolioItemType = {
  githubUrl: string;
  liveUrl: string;
  createdAt: string;
  description: string;
  id: string;
  images: ImageItemType[];
  publishedAt: string;
  slug: null;
  technologies: string[];
  title: string;
  updatedAt: string;
};

export type GetPortfolioResponse = {
  portfolio: PortfolioItemType[];
};
