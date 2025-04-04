import Image from "next/image";
import Link from "next/link";

export const FeaturedCard = () => {
  return (
    <Link href="/article-slug" className="group block">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-[4/3] md:aspect-[16/12] overflow-hidden ">
          <Image
            src="https://images.unsplash.com/photo-1742201835840-1325b7546403?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthcare Reform in Japan"
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <span className="text-[#2686EA] text-sm font-medium">Health</span>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-[#2686EA] transition-colors leading-tight">
                Japan Unveils Groundbreaking Healthcare Reform, Elevating Global
                Standards
              </h2>

              <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                In a bold move set to transform public health, Japan&apos;s
                Ministry of Health announced an unprecedented reform package
                aimed at expanding access to high-quality healthcare. The
                comprehensive plan introduces innovative solutions to address
                aging population challenges.
              </p>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500 gap-2">
            <time>Feb 27, 2025</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
