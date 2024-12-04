'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
              Join the SPORTIFY Community
            </h3>
            <p className="text-gray-400 mb-8">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">SPORTIFY</h4>
              <p className="text-gray-400 text-sm mb-6">
                Premium sports gear for athletes who demand excellence. Quality, innovation, and performance in every product.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                    Shop All
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <p>123 Sport Street</p>
                  <p>Los Angeles, CA 90012</p>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <a href="mailto:support@sportify.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={16} />
                    support@sportify.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SPORTIFY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
