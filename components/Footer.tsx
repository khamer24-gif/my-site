
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tooth">
                <path d="M7 6.5C7 4.01 9 2 12 2s5 2.01 5 4.5c0 3.8-1.5 5.5-3 5.5s-3-1.7-3-5.5z"/>
                <path d="M7 14.5c0 2.49 2 4.5 5 4.5s5-2.01 5-4.5c0-3.8-1.5-5.5-3-5.5s-3 1.7-3 5.5z"/>
              </svg>
              <span className="text-xl font-bold tracking-tight text-[#0B2A4A]">DENTAL CLINIC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Современные стандарты стоматологического лечения в самом сердце Зеленодольска. Доверие тысяч пациентов с 2010 года.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <a key={i} href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-[#0B2A4A] hover:text-white hover:border-[#0B2A4A] transition-all text-gray-400">
                   {i === 1 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>}
                   {i === 2 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                   {i === 3 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#1E1E1E] mb-6 uppercase tracking-wider text-sm">Навигация</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#0B2A4A] transition-colors">Имплантация</a></li>
              <li><a href="#" className="hover:text-[#0B2A4A] transition-colors">Протезирование</a></li>
              <li><a href="#" className="hover:text-[#0B2A4A] transition-colors">Эстетика</a></li>
              <li><a href="#" className="hover:text-[#0B2A4A] transition-colors">Диагностика</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1E1E1E] mb-6 uppercase tracking-wider text-sm">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B2A4A] flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>г. Зеленодольск, <br/>ул. Степная, д. 5</span>
              </li>
              <li className="flex gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B2A4A] flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>8 (917) 895-03-30</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1E1E1E] mb-6 uppercase tracking-wider text-sm">График работы</h4>
            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Пн - Пт:</span>
                <span className="font-bold text-[#1E1E1E]">08:00 — 20:00</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Сб:</span>
                <span className="font-bold text-[#1E1E1E]">09:00 — 18:00</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>Вс:</span>
                <span>Выходной</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
          <p>© 2025 Все права защищены. Dental Clinic Зеленодольск.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Правовая информация</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
