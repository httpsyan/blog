export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Post = {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  image: string;
  category: Category;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  publishedAt: string;
  tags: string[];
};
