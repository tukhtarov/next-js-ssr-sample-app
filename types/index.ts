export interface IArticle {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface IArticlesProps {
  data: IArticle[];
}

export interface IArticleProps {
  data: IArticle | null;
}