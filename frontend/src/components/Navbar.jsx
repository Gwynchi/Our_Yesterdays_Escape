import React from 'react';

export default function Navbar() {
  return (
    // GLASSMORPHISM CLASSES: fixed, backdrop-blur-md, semi-transparent background, and a subtle border
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2C1E16]/60 backdrop-blur-md border-b border-[#D4A373]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Cafe Logo/Brand Name */}
        <div className="text-[#F5E6D3] font-serif text-xl md:text-2xl tracking-widest font-light">
          OYE <span className="text-[#D4A373] italic">Café</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-[#F5E6D3] hover:text-[#D4A373] transition-colors uppercase tracking-widest text-sm">About</a>
          <a href="#univerkada" className="text-[#F5E6D3] hover:text-[#D4A373] transition-colors uppercase tracking-widest text-sm">Univerkada</a>
          <a href="#shop" className="text-[#F5E6D3] hover:text-[#D4A373] transition-colors uppercase tracking-widest text-sm">Shop</a>
          <a href="#merchandise" className="text-[#F5E6D3] hover:text-[#D4A373] transition-colors uppercase tracking-widest text-sm">Merchandise</a>
          <a href="#contact" className="text-[#F5E6D3] hover:text-[#D4A373] transition-colors uppercase tracking-widest text-sm">Contact</a>
        </div>

      </div>
    </nav>
  );
}