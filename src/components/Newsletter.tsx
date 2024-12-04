'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Join the SPORTIFY Community
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates about new products, special offers, and training tips.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-900 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
