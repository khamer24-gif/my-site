
import React, { useState } from 'react';
import { TreatmentType, MaterialType, PRICING_DATA, TREATMENT_LABELS } from '../types';

const Calculator: React.FC = () => {
  const [treatment, setTreatment] = useState<TreatmentType>('caries');
  const [material, setMaterial] = useState<MaterialType>('economy');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const data = PRICING_DATA[treatment];
    const price = material === 'economy' ? data.base : data.premium;
    setResult(price);
  };

  return (
    <section id="calculator" className="py-24 bg-[#F8F9FC]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-6">Рассчитайте стоимость лечения за 1 минуту</h2>
            <p className="text-gray-500 text-lg">Получите предварительный расчет стоимости прямо сейчас. Точная цена формируется после осмотра врачом.</p>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 space-y-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Что вас беспокоит?</label>
                <select 
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value as TreatmentType)}
                  className="w-full p-4 border border-gray-200 focus:border-[#0B2A4A] focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
                >
                  {(Object.keys(TREATMENT_LABELS) as TreatmentType[]).map(key => (
                    <option key={key} value={key}>{TREATMENT_LABELS[key]}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Предпочитаемый материал</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`cursor-pointer border p-4 text-center transition-all ${material === 'economy' ? 'bg-[#0B2A4A] text-white border-[#0B2A4A]' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}>
                    <input 
                      type="radio" 
                      name="material" 
                      className="hidden" 
                      checked={material === 'economy'}
                      onChange={() => setMaterial('economy')}
                    />
                    <span className="font-bold">Эконом</span>
                    <span className="block text-[10px] mt-1 opacity-70">Базовые решения</span>
                  </label>
                  <label className={`cursor-pointer border p-4 text-center transition-all ${material === 'premium' ? 'bg-[#0B2A4A] text-white border-[#0B2A4A]' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}>
                    <input 
                      type="radio" 
                      name="material" 
                      className="hidden" 
                      checked={material === 'premium'}
                      onChange={() => setMaterial('premium')}
                    />
                    <span className="font-bold">Премиум</span>
                    <span className="block text-[10px] mt-1 opacity-70">Цирконий / Керамика</span>
                  </label>
                </div>
              </div>

              <button 
                onClick={calculate}
                className="w-full py-5 bg-[#0B2A4A] text-white font-bold uppercase tracking-widest hover:bg-[#163a5f] transition-all"
              >
                Рассчитать стоимость
              </button>
            </div>

            <div className="md:w-1/2 flex flex-col justify-center items-center bg-[#F8F9FC] p-8 border border-dashed border-gray-200">
              {result !== null ? (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2 block">Предварительный расчет:</span>
                  <div className="text-4xl md:text-5xl font-bold text-[#0B2A4A] mb-4">
                    от {result.toLocaleString('ru-RU')} ₽
                  </div>
                  <p className="text-gray-500 text-sm max-w-[200px]">
                    В стоимость включена работа специалиста и материалы.
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-200 w-full">
                    <p className="text-[#1E1E1E] font-medium text-sm mb-4 italic">Зеленодольск, клиника Premium</p>
                    <button className="text-[#0B2A4A] font-bold border-b-2 border-[#0B2A4A] hover:opacity-70 transition-opacity">
                      Записаться на этот расчет
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-300">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 opacity-30">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="text-sm">Результат появится здесь после выбора параметров</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
