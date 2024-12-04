'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';

export default function ProductGrid() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Products</h2>
            <p className="text-gray-400 mt-2">Discover our premium collection</p>
          </div>
          <Link 
            href="/products" 
            className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors hidden md:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-gray-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium">
                      <Link href={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-400">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/products" 
          className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors mt-12 block text-center md:hidden"
        >
          View All Products →
        </Link>
      </div>
    </div>
  );
}
