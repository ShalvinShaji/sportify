import ProductGrid from '@/components/ProductGrid'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <Categories />
      <ProductGrid />
    </div>
  )
}
