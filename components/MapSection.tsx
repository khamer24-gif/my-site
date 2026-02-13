
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const MapSection: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const getDirections = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite-latest",
        contents: "Дай прямую ссылку на Google Maps для клиники: г. Зеленодольск, ул. Степная, д. 5. Верни только URL.",
        config: {
          tools: [{ googleMaps: {} }],
        },
      });

      // Extract the URI from grounding chunks
      const mapsChunk = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.find(c => c.maps?.uri);
      const url = mapsChunk?.maps?.uri || "https://www.google.com/maps/search/?api=1&query=Зеленодольск+Степная+5+стоматология";
      
      window.open(url, '_blank');
    } catch (error) {
      console.error("Maps error:", error);
      window.open("https://www.google.com/maps/search/?api=1&query=Зеленодольск+Степная+5+стоматология", '_blank');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2A4A] mb-4 block">Местоположение</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-8 leading-tight">
              Мы находимся в самом центре Зеленодольска
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Удобный подъезд, собственная парковка для пациентов и комфортная зона ожидания. Найти нас очень просто — мы находимся рядом с ключевыми транспортными развязками города.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F9FC] flex items-center justify-center text-[#0B2A4A] flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E]">Наш адрес</h4>
                  <p className="text-gray-500">Республика Татарстан, г. Зеленодольск, ул. Степная, д. 5</p>
                </div>
              </div>
            </div>

            <button 
              onClick={getDirections}
              disabled={loading}
              className="px-10 py-5 bg-[#0B2A4A] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#163a5f] transition-all flex items-center gap-3 disabled:opacity-50"
            >
              {loading ? 'Загрузка...' : 'Открыть в навигаторе'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="7 13 12 18 17 13"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
            </button>
          </div>
          
          <div className="md:w-1/2 w-full aspect-video md:aspect-square bg-gray-100 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
              alt="Клиника снаружи" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0B2A4A]/10 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 bg-white p-6 shadow-2xl">
              <p className="text-[#0B2A4A] font-bold text-sm uppercase tracking-widest mb-1">Режим работы</p>
              <p className="text-gray-500 text-xs italic">Пн-Сб: 08:00 — 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
