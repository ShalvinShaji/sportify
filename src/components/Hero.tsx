'use client';

import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://cdn.coverr.co/videos/coverr-athlete-working-out-in-the-gym-2856/1080p.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-[2000px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
        {/* Main Heading with Animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter">
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            ELEVATE YOUR
          </span>
          <span className="block text-gradient opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            PERFORMANCE
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Discover premium sports gear designed for athletes who demand excellence. Quality, innovation, and performance in every product.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link
            href="/shop"
            className="group bg-white text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Shop Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={scrollToProducts}
            className="group border border-white text-white px-8 py-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            Explore Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-400 text-sm">Premium Products</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Secure Checkout</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProducts}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s' }}
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
