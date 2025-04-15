import { useState } from "react";
import {
  posts as initialPosts,
  categories as initialCategories,
} from "../data";
import { Post } from "../types";

interface UsePostsProps {
  initialSearch?: string;
}

export const usePosts = (props?: UsePostsProps) => {
  const { initialSearch } = props || {};
  const [searchTerm, setSearchTerm] = useState(initialSearch || "");
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    const matchesCategory = selectedCategory
      ? post.category.slug === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const getPostBySlug = (slug: string): Post | undefined => {
    return initialPosts.find((post) => post.slug === slug);
  };

  return {
    posts: filteredPosts,
    categories: initialCategories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    getPostBySlug,
  };
};
