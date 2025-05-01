import React from 'react';

const PlanosIndividuais = () => {
    const planos = [
        {
            titulo: '2x p/ Semana',
            preco: 'R$ 399,90/mês',
            beneficios: 
            ['treinos são individuais, específicos para seu caso, objetivo e necessidade.', 
                 'Cardápio Alimentar para melhorar seus resultados, de acordo com seu objetivo',
                 'Suporte diário para tirar qualquer dúvida',],
        },
        {
            titulo: '3x p/ Semana',
            preco: 'R$ 499,90/mês',
            beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3', 'Benefício 4'],
        },
        {
            titulo: '4X p/ Semana',
            preco: 'R$ 599,90/mês',
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
};

export default PlanosIndividuais;
