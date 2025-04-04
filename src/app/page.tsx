import { HeroCarousel, FeaturedCard, AsideCard, Footer } from "@/presentation";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <HeroCarousel />

      <section className="container mx-auto grid grid-cols-12 gap-8 px-4">
        <div className="col-span-12 lg:col-span-8 lg:border-r lg:pr-8 border-gray-100">
          <div className="flex flex-col gap-8">
            <FeaturedCard />
            <div className="h-px bg-gray-100" />
            <FeaturedCard />
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-4">
            Trending Now
          </h3>
          <AsideCard />
          <AsideCard />
          <AsideCard />
          <AsideCard />
        </aside>
      </section>

      <Footer />
    </main>
  );
}
