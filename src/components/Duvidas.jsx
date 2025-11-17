import React, { useState } from 'react';

const Duvidas = () => {
  const [ativo, setAtivo] = useState(null);

    const duvidas = [
        {
            titulo: 'Como funciona a consultoria online?',
            resposta: 'Após uma avaliação inicial, eu monto um plano de treino totalmente personalizado para seu objetivo, rotina e equipamentos disponíveis. A cada semana acompanhamos sua evolução juntos.'
        },
        {
            titulo: 'Qual a diferença entre consultoria online e presencial?',
            resposta: 'A principal diferença é o formato. Na online, você treina no seu horário, com meu acompanhamento à distância. Mas o suporte, a personalização e os resultados continuam os mesmos.'
        },
        {
            titulo: 'A consultoria é totalmente personalizada?',
            resposta: 'Sim! Cada treino é feito com base nas suas condições físicas, objetivos, tempo disponível e equipamentos. Nada de treino genérico.'
        },
        {
            titulo: 'É possível ter bons resultados mesmo sem o personal presencialmente?',
            resposta: 'Com certeza! A grande maioria dos meus alunos online tem resultados iguais ou até melhores, pois têm mais autonomia e aprendem a se manter consistentes.'
        },
        {
            titulo: 'Com que frequência o treino é atualizado?',
            resposta: 'O plano é ajustado semanal ou quinzenalmente, dependendo da sua evolução, disponibilidade e feedbacks que você me enviar.'
        },
        {
            titulo: 'Você acompanha minha evolução?',
            resposta: 'Sim! Acompanhamento é a base da consultoria. Avaliamos juntos seus treinos, ajustes, fotos de progresso e métricas importantes.'
        },
        {
            titulo: 'E se eu não tiver tempo para treinar todos os dias?',
            resposta: 'Sem problema. O plano é feito com base no seu tempo. Treinos de 30 a 40 minutos, de 2 a 5 vezes por semana, já trazem ótimos resultados se bem feitos.'
        },
        {
            titulo: 'Preciso ter equipamentos em casa?',
            resposta: 'Não. Se você tiver, ótimo. Mas se não tiver, adapto tudo para o que estiver disponível — até com o peso do próprio corpo.'
        },
        {
            titulo: 'Você atende iniciantes?',
            resposta: 'Sim! Atendo desde quem nunca treinou até quem já treina há anos. Tudo é feito passo a passo, com segurança.'
        }
    ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-8">
          Tem dúvidas? Aqui vão algumas respostas!
        </h1>
        
        <p className="text-center text-gray-300 text-lg mb-12 leading-relaxed">
          Antes de decidir começar sua transformação comigo, é super normal ter algumas perguntas.
          Quero que você se sinta seguro, bem informado e confiante com cada passo que vamos dar juntos.
        </p>

        <div className="space-y-4">
          {duvidas.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-orange-500 transition-all duration-300"
            >
              <button
                onClick={() => setAtivo(ativo === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="text-white font-bold text-lg pr-4">{item.titulo}</span>
                <span className={`text-orange-500 text-2xl transition-transform duration-300 ${ativo === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${ativo === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {item.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Duvidas;


