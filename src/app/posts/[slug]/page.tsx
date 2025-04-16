"use client";

import { usePosts } from "@/domains/posts/hooks/usePosts";
import { Footer } from "@/presentation/components";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Post } from "@/domains/posts/types";
import React, { use } from "react";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PostPage({ params }: PostPageProps) {
  const { getPostBySlug } = usePosts();
  const paramsPromise = Promise.resolve(params);
  const paramsState = use(paramsPromise);

  if (!paramsState) {
    return <div>Loading...</div>;
  }

  const post = getPostBySlug(paramsState.slug) as Post;

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-32">
      <div className="relative h-[60vh]">
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
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-2xl  font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{post.description}</p>
          <div className="flex items-center gap-2 sm:gap-4 text-sm">
            <time className="text-xs sm:text-sm text-gray-600">
              {post.publishedAt}
            </time>
            <span className="text-gray-300">•</span>
            <span className="text-xs sm:text-sm text-gray-600">
              {post.readTime} de leitura
            </span>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="bg-gray-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {post.author.name}
            </h2>
            <p className="text-lg text-gray-600 mb-4">Neurologista Infantil</p>
            <p className="text-gray-600 max-w-2xl">
              Especialista em Neurologia Infantil, com vasta experiência no
              tratamento de distúrbios neurológicos em crianças. Dedicado a
              proporcionar o melhor cuidado e orientação para seus pacientes e
              familiares.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
