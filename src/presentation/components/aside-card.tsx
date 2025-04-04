import Image from "next/image";
import Link from "next/link";

export const AsideCard = () => {
  return (
    <Link href="/article-slug" className="group">
      <article className="flex gap-4">
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1742201835840-1325b7546403?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthcare Reform in Japan"
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            sizes="96px"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#2686EA] text-xs font-medium">Health</span>

          <h3 className="text-base font-medium text-gray-900 group-hover:text-[#2686EA] transition-colors line-clamp-2">
            Japan Unveils Groundbreaking Healthcare Reform
          </h3>

          <time className="text-sm text-gray-500">Feb 27, 2025</time>
        </div>
      </article>
    </Link>
  );
};
