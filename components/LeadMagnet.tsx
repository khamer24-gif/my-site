
import React, { useState } from 'react';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    console.log('Lead registered:', email);
    setIsSent(true);
    alert('Ссылка на чек-лист отправлена на ваш email!');
    
    // Imitate file download
    const blob = new Blob(['Ваш промокод на скидку 5%: DENTAL2025\n\nЧек-лист по выбору импланта...'], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'checklist-dental.txt';
    a.click();
  };

  return (
    <section className="py-20 bg-[#0B2A4A] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#163a5f] p-8 md:p-16 relative overflow-hidden">
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Скачайте чек-лист: <br/>
              <span className="text-blue-200">"Как не ошибиться с выбором импланта?"</span>
            </h2>
            <p className="text-lg text-blue-100/80 mb-8 max-w-lg">
              Узнайте 7 критических факторов при выборе систем имплантации. <br/>
              <span className="font-bold text-white">Внутри — ваш персональный промокод на скидку 5%.</span>
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 group">
              <input
                type="email"
                required
                placeholder="Ваш Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-6 py-4 bg-white text-[#1E1E1E] focus:outline-none placeholder:text-gray-400"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold uppercase tracking-widest transition-all duration-300"
              >
                Получить чек-лист
              </button>
            </form>
            {isSent && <p className="mt-4 text-green-400 text-sm">Проверьте почту, файл уже там!</p>}
          </div>

          <div className="lg:w-1/3 hidden lg:block relative z-10">
             <div className="bg-white p-8 shadow-2xl transform rotate-3 scale-110">
                <div className="w-12 h-1 bg-blue-500 mb-4"></div>
                <h3 className="text-[#0B2A4A] font-bold text-xl mb-4">Чек-лист 2025</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Выбор производителя</li>
                  <li>• Материалы имплантов</li>
                  <li>• Сроки приживаемости</li>
                  <li>• Гарантийные обязательства</li>
                </ul>
                <div className="mt-8 border-t pt-4 text-[#0B2A4A] font-bold">
                  DENTAL_CHECKLIST_PDF
                </div>
             </div>
          </div>

          {/* Abstract background shape */}
          <div className="absolute bottom-[-50%] right-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
