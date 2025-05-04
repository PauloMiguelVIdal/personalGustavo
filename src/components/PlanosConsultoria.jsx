import React from 'react';

const PlanosConsultoria = () => {
  const planos = [
    {
        titulo: 'Pacote Mensal Musculação',
        preco: 'R$ 197',
        beneficios: 
        ['treinos são individuais, específicos para seu caso, objetivo e necessidade.', 
             'Cardápio Alimentar para melhorar seus resultados, de acordo com seu objetivo',
             'Suporte diário para tirar qualquer dúvida',],
    },
    {
        titulo: 'Pacote Trimestral Musculação',
        preco: 'R$ 297',
        beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3', 'Benefício 4'],
    },
    {
      titulo: 'Pacote Semestral Musculação',
        preco: 'R$ 497',
        beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3', 'Benefício 4', 'Benefício 5'],
    },
    {
        titulo: '5X p/ Semana',
        preco: 'R$ 699,90/mês',
        beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3', 'Benefício 4', 'Benefício 5'],
    },
];

return (
  <div className="planos-container">
    <h1>Planos de Consultoria Online</h1>
    <p>Escolha o plano que melhor se adapta às suas necessidades e objetivos.</p>
      {planos.map((plano, index) => (
          <div className="card" key={index}>
              <h2 className='titulo'>{plano.titulo}</h2>
              <p className="preco">{plano.preco}</p>
              {/* <ul className='base-planos-container'>
                  {plano.beneficios.map((beneficio, idx) => (
                      <li className='features' key={idx}>{beneficio}</li>
                  ))}
              </ul> */}
              <button className='botão'>Assinar</button>
          </div>
      ))}
  </div>
);


    // const planos = [
    //     {
    //         tipo: 'Dieta + Treino',
    //         opcoes: [
    //             { duracao: 'Mensal', preco: 200 },
    //             { duracao: 'Trimestral', preco: 300 },
    //             { duracao: 'Semestral', preco: 500 },
    //         ],
    //     },
    //     {
    //         tipo: 'Somente Treino',
    //         opcoes: [
    //             { duracao: 'Mensal', preco: 200 },
    //             { duracao: 'Trimestral', preco: 300 },
    //             { duracao: 'Semestral', preco: 500 },
    //         ],
    //     },
    // ];

//     return (
// <div className="container-planos">
//   <h1>Planos de Consultoria Online</h1>
//   {planos.map((plano, index) => (
//     <div key={index} className="plano-box">
//       <h2>{plano.tipo}</h2>
//       <ul>
//         {plano.opcoes.map((opcao, idx) => (
//           <li key={idx}>
//             <strong>{opcao.duracao}:</strong> R$ {opcao.preco},00
//           </li>
//         ))}
//       </ul>
//     </div>
//   ))}
// </div>
//     );
};

export default PlanosConsultoria;

