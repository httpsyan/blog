"use client";

import { usePosts } from "@/domains/posts/hooks/usePosts";
import { Hero, Footer } from "@/presentation/components";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { use } from "react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const { getPostBySlug } = usePosts();
  const resolvedParams = use(params);
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-32">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Hero
          title={post.title}
          description={post.description}
          className="relative z-10"
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full size-12"
              />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm">Neurologista Infantil</p>
              </div>
            </div>
            <span className="text-gray-300">•</span>
            <time className="text-sm">{post.publishedAt}</time>
            <span className="text-gray-300">•</span>
            <span className="text-sm">{post.readTime} de leitura</span>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <Footer />
    </main>
  );
}
