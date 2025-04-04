import Link from "next/link";

const categories = [
  "World",
  "Business",
  "Politics",
  "Health",
  "Tech",
  "Sports",
] as const;

const companyLinks = ["About", "Contact"] as const;

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col gap-4">
            <h4 className="font-semibold text-lg sm:text-xl text-white">
              About FullStory
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              A trusted voice in journalism, we deliver breaking news, in-depth
              analysis, and global perspectives that keep millions of readers
              informed, inspired and engaged.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-semibold text-white">Categories</h4>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {categories.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-[#2686EA] transition-colors text-sm py-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-semibold text-white">Company</h4>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {companyLinks.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-[#2686EA] transition-colors text-sm py-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-semibold text-white">Newsletter</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-[#2686EA] text-sm text-white 
                         placeholder:text-gray-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#2686EA] text-white rounded-lg 
                         hover:bg-[#2176d0] transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 lg:mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">© 2025 All Rights Reserved</p>
          <p className="text-sm text-gray-400">Made with Next.js</p>
        </div>
      </div>
    </footer>
  );
};
