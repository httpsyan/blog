import { HeroCarousel, type Slide } from "@/presentation";

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1742054294284-baa5691ede46?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Breaking News",
    title:
      "China's E-Commerce Marketplaces Connect Citizens and Global Consumers",
    description:
      "At the heart of the strategy is a renewed commitment to education, economic development, and cultural preservation. Federal Minister for Indigenous Affairs, Marcia Lawson, outlined a series of measures that include enhanced funding for",
    author: "David Goggins",
    readTime: "3 min read",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    tag: "Technology",
    title: "AI Revolution: How Machine Learning is Transforming Industries",
    description:
      "Artificial Intelligence continues to reshape how businesses operate, with new breakthroughs in machine learning algorithms leading to unprecedented efficiency gains and innovation across sectors.",
    author: "Sarah Chen",
    readTime: "5 min read",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1707345512638-997d5c814f88?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    tag: "Business",
    title: "Global Markets Shift: The Rise of Sustainable Investments",
    description:
      "Investors worldwide are increasingly focusing on sustainable and ESG-compliant investments, marking a significant shift in global financial markets and corporate responsibility.",
    author: "Michael Bloomberg",
    readTime: "4 min read",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <HeroCarousel slides={slides} />
    </main>
  );
}
