import React from 'react';
import Navbar from '../components/Navbar';

export default function MainCafe() {
  return (
    <div className="w-full font-sans">
      {/* The Glass Navbar */}
      <Navbar />

      {/* SECTION PLACEHOLDERS */}
      {/* Note the pt-24 (padding-top) on each section. This prevents the fixed Navbar from covering the titles. */}

      <section id="about" className="min-h-screen pt-24 px-8 bg-[#F5E6D3] flex flex-col items-center justify-center">
        <h2 className="text-5xl font-serif text-[#2C1E16] mb-4">About Us</h2>
        <p className="text-xl text-[#2C1E16]/80 text-center max-w-2xl">
          What is Our Yesterdays Escape? This section will hold your brief introduction.
        </p>
      </section>

      <section id="univerkada" className="min-h-screen pt-24 px-8 bg-[#E6CCB2] flex flex-col items-center justify-center">
        <h2 className="text-5xl font-serif text-[#2C1E16] mb-4">The Univerkada</h2>
        <p className="text-xl text-[#2C1E16]/80 text-center max-w-2xl mb-8">
          The background story featuring TRIE, SSA, CITW, AOTD, GSOT, and Ciandrei & Kierra.
        </p>
        <div className="border border-[#2C1E16]/20 p-12 text-[#2C1E16]/50 italic">
          [ Interactive Photobook Component will go here ]
        </div>
      </section>

      <section id="shop" className="min-h-screen pt-24 px-8 bg-[#D4A373] flex flex-col items-center justify-center">
        <h2 className="text-5xl font-serif text-[#2C1E16] mb-4">Yesterday's Café</h2>
        <p className="text-xl text-[#2C1E16]/80 text-center max-w-2xl mb-8">
          Come and Visit our Yesterdays Café.
        </p>
        <div className="flex gap-4">
          <div className="w-48 h-64 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#2C1E16]">Menu: Pastries</div>
          <div className="w-48 h-64 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#2C1E16]">Menu: Beverages</div>
        </div>
      </section>

      <section id="merchandise" className="min-h-screen pt-24 px-8 bg-[#2C1E16] flex flex-col items-center justify-center">
        <h2 className="text-5xl font-serif text-[#F5E6D3] mb-4">Merchandise</h2>
        <p className="text-xl text-[#F5E6D3]/80 text-center max-w-2xl">
          Exclusive OYE apparel and collectibles.
        </p>
      </section>

      <section id="contact" className="min-h-screen pt-24 px-8 bg-[#1A120D] flex flex-col items-center justify-center">
        <h2 className="text-5xl font-serif text-[#D4A373] mb-4">Contact Us</h2>
        <p className="text-xl text-[#F5E6D3]/80 text-center max-w-2xl">
          Reach out for inquiries or reservations.
        </p>
      </section>

    </div>
  );
}