'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeaturedSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-8">
        {/* Featured Collection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">
              New Collection
              <br />
              <span className="text-gradient">Summer 2024</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Discover our latest collection of premium sports gear designed for peak performance. 
              Engineered for athletes who demand excellence.
            </p>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 w-fit hover:bg-gray-100 transition-colors"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=75"
                  alt="Featured Product 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=75"
                  alt="Featured Product 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&auto=format&fit=crop&q=75"
                  alt="Featured Product 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=75"
                  alt="Featured Product 4"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
