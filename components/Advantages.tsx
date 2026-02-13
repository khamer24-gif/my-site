
import React from 'react';

const ADVANTAGES = [
  {
    title: 'Стерильно',
    desc: 'Многоступенчатая система дезинфекции и стерилизации по стандартам ISO.',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    title: 'Безболезненно',
    desc: 'Используем лучшие анестетики и методы седации для вашего комфорта.',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  },
  {
    title: 'Опытные врачи',
    desc: 'Наши специалисты регулярно стажируются в ведущих клиниках Европы и Кореи.',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    title: 'Своя лаборатория',
    desc: 'Собственная зуботехническая лаборатория позволяет сократить сроки протезирования.',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/></svg>
  }
];

const Advantages: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="group">
              <div className="w-16 h-16 bg-[#F8F9FC] text-[#0B2A4A] flex items-center justify-center mb-8 group-hover:bg-[#0B2A4A] group-hover:text-white transition-all duration-300">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-4 uppercase tracking-wide">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 opacity-50">
           <div className="flex items-center gap-2">
              <span className="font-bold text-gray-400">Лицензия:</span>
              <span className="text-sm text-gray-400">Министерства здравоохранения РТ им. ЛО-16-01-007892</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="font-bold text-gray-400">Год основания:</span>
              <span className="text-sm text-gray-400">2010 (Обновлено 2025)</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
