import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import FeaturedSection from '@/components/FeaturedSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Categories />
      <ProductGrid />
      <FeaturedSection />
    </div>
  );
}
