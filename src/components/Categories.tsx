'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { categories } from '@/lib/data';

export default function Categories() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div id="categories" className="bg-black py-24">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
              Shop by Category
            </h2>
            <p className="text-gray-400 mt-2">
              Find the perfect gear for your sport
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 border border-white/10 text-white hover:bg-white/10 transition-colors rounded-full"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 border border-white/10 text-white hover:bg-white/10 transition-colors rounded-full"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {categories.map((category) => (
              <div key={category.id} className="min-w-[280px] md:min-w-[400px] flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_25%] pl-4">
                <Link href={`/categories/${category.id}`}>
                  <div className="group relative aspect-[4/5] overflow-hidden bg-gray-900 rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={800}
                      height={1000}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Shop Now
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          <button
            onClick={scrollPrev}
            className="p-3 border border-white/10 text-white hover:bg-white/10 transition-colors rounded-full"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 border border-white/10 text-white hover:bg-white/10 transition-colors rounded-full"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
