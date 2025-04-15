"use client";

import { HomeHero } from "@/presentation/components";
import { usePosts } from "@/domains/posts/hooks/usePosts";
import { PostCard, Footer } from "@/presentation/components";

export default function Home() {
  const { posts } = usePosts();

  return (
    <main className="flex min-h-screen flex-col">
      <HomeHero />

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Posts Grid */}
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
