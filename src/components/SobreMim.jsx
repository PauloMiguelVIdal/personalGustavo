import React from 'react';
import depois4 from "../images/depois4.jpg";
import antes4 from "../images/antes4.jpg";

const SobreMim = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-4">
            EU ESTIVE NO SEU LUGAR!!!
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={antes4} 
                alt="Antes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="inline-block px-4 py-2 bg-red-600 text-white font-bold rounded-full text-sm mb-4">
                  ANTES
                </span>
                <p className="text-white text-lg leading-relaxed">
                "Olá! Sou o Gustavo. Já enfrentei o sobrepeso e sei como é lidar com a autoestima baixa, o cansaço e a frustração de tentar de tudo sem resultados. Cada dia era uma luta contra a desmotivação e a falta de energia."
                </p>
                <p className="text-white text-lg leading-relaxed mt-4">
                  "Foi então que percebi que precisava mudar — e, com disciplina e novos hábitos, tudo começou a se transformar."
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={depois4}
                alt="Depois" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-sm mb-4">
                  DEPOIS
                </span>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Hoje, como personal trainer, uso minha experiência pessoal para ajudar outras pessoas a alcançarem seus objetivos e a viverem de forma mais saudável.
                </p>
                <a href="#planos">
                  <button className="w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50">
                    Comece sua jornada comigo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;


