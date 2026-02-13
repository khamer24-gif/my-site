
import React from 'react';

const Hero: React.FC = () => {
  const scrollToCalc = () => {
    const calc = document.getElementById('calculator');
    calc?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-[#F8F9FC] text-[#0B2A4A] text-xs font-bold uppercase tracking-widest mb-6">
            Премиальный сервис в Зеленодольске
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E1E1E] leading-tight mb-8">
            Имплантация и протезирование <span className="text-[#0B2A4A]">под ключ</span> в Зеленодольске
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
            Комфортная стоматология с гарантией до 5 лет. Работаем в день обращения, используя передовые цифровые технологии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToCalc}
              className="px-10 py-5 bg-[#0B2A4A] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#163a5f] transition-all duration-300 shadow-xl shadow-blue-900/10"
            >
              Бесплатная консультация
            </button>
            <div className="flex items-center gap-4 px-4 py-2">
              <div className="flex -space-x-2">
                {[1, 2].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/doc${i}/40/40`} alt="врач" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-[#1E1E1E]">2 опытных врача</p>
                <p className="text-gray-400">со стажем более 20 лет</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-20 right-[-10%] w-[50%] h-[80%] opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0B2A4A" d="M44.7,-76.4C58.3,-69.2,70,-58.5,79.1,-45.5C88.3,-32.5,95,-17.2,94.2,-2.3C93.4,12.5,85.2,26.9,76.3,40.1C67.5,53.2,58,65.1,45.7,73.4C33.4,81.7,18.3,86.4,2.3,82.8C-13.7,79.3,-30.6,67.6,-44.7,56.5C-58.8,45.4,-70.2,35,-77.8,21.7C-85.4,8.5,-89.2,-7.7,-85.4,-22.4C-81.6,-37.1,-70.2,-50.3,-56.9,-58C-43.6,-65.7,-28.3,-67.9,-14.2,-74C-0.1,-80.1,14.2,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
