
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 6.5C7 4.01 9 2 12 2s5 2.01 5 4.5c0 3.8-1.5 5.5-3 5.5s-3-1.7-3-5.5z"/>
              <path d="M7 14.5c0 2.49 2 4.5 5 4.5s5-2.01 5-4.5c0-3.8-1.5-5.5-3-5.5s-3 1.7-3 5.5z"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#0B2A4A]">DENTAL CLINIC</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Зеленодольск</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col items-end mr-4">
            <a href="tel:+79178950330" className="text-[#1E1E1E] font-semibold hover:text-[#0B2A4A] transition-colors">
              8 (917) 895-03-30
            </a>
            <span className="text-[10px] text-green-600 font-medium uppercase">Вс — выходной</span>
          </div>
          
          <button className="px-6 py-2 border border-[#0B2A4A] text-[#0B2A4A] text-sm font-semibold hover:bg-[#0B2A4A] hover:text-white transition-all duration-300 rounded-none">
            ЗАПИСАТЬСЯ ОНЛАЙН
          </button>
        </div>

        <button className="md:hidden p-2 text-[#0B2A4A]">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
