import React from 'react';
import alvo from "../icons/alvo.png";
import ajuste from "../icons/ajuste.png";
import app from "../icons/app.png";
import suporte from "../icons/suporte.png";


const PlanosGerais = () => {
  const beneficios = [
    {
      icon: "🎯",
      text: "Todos os planos os treinos são individuais, específicos para seu caso, objetivo e necessidade."
    },
    {
      icon: "📱",
      text: "Treinos organizados com vídeos de demonstração de cada exercício, direto no app."
    },
    {
      icon: "⚙️",
      text: "Feedback semanal com correção de exercícios diários do protocolo"
    },
    {
      icon: "💬",
      text: "Suporte diário para tirar qualquer dúvida."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-16">
          CONSULTORIA ONLINE
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {beneficios.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">{item.icon}</div>
                <p className="text-white text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            PLANOS DE CONSULTORIA
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default PlanosGerais;