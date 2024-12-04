'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';

export default function ProductGrid() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Discover our collection of premium sports gear designed for peak performance
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity text-lg"
          >
            View Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block">
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1200}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    priority={parseInt(product.id) <= 4}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Quick Add Button */}
                <button 
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-black py-3 
                           opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-300 font-medium hover:bg-white"
                >
                  Quick Add
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 md:hidden">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 w-full bg-black text-white px-6 py-4 hover:bg-gray-900 transition-colors text-lg"
          >
            View Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
