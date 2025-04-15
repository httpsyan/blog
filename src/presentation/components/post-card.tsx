import Image from "next/image";
import Link from "next/link";
import { Post } from "@/domains/posts/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block h-full">
      <article className="bg-white rounded-sm border border-border overflow-hidden  h-full flex flex-col">
        <div className="relative h-56">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium mb-2">
              {post.category.name}
            </span>
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
            {post.description}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="relative size-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                {post.author.name}
              </span>
            </div>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
