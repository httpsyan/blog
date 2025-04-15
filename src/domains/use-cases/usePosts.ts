import { useState, useMemo, useEffect } from "react";
import { posts as initialPosts, categories } from "@/domains/posts/data";

interface UsePostsProps {
  initialCategory?: string;
  initialSearch?: string;
}

export function usePosts({
  initialCategory,
  initialSearch,
}: UsePostsProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    initialCategory
  );
  const [searchTerm, setSearchTerm] = useState(initialSearch || "");

  useEffect(() => {
    setSearchTerm(initialSearch || "");
  }, [initialSearch]);

  const filteredPosts = useMemo(() => {
    let filtered = [...initialPosts];

    if (selectedCategory) {
      filtered = filtered.filter(
        (post) => post.category.slug === selectedCategory
      );
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.description.toLowerCase().includes(searchLower) ||
          post.content.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const getPostBySlug = (slug: string) => {
    return initialPosts.find((post) => post.slug === slug);
  };

  return {
    posts: filteredPosts,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    getPostBySlug,
  };
}
