import React from 'react';

const PlanosConsultoria = () => {
    const planos = [
        {
            titulo: 'Mensal',
            descTitle: "Somente Treino",
            desc: "Para quem quer ter a primeira experiência com a sua melhor versão",
            preco: 197,
            precoReal: 197,
            descount: 0,
            cores: {
                bgCor1: "F23005",
                bgCor2: "F23005",
                bgTitle1: "000000",
                bgTitle2: "000000",
                bgPrice1: "000000",
                bgPrice2: "000000",
                colorDescount: "000000",
                bgBotton1: "000000",
                bgBotton2: "000000",
                colorTextBotton: "FFFFFF",
            }

        },
        {
            titulo: 'Mensal',
            descTitle: "Treino + Dieta",
            desc: "Para quem quer ter a primeira experiência com a sua melhor versão",
            preco: 397,
            precoReal: 397,
            descount: 0,
            cores: {
                bgCor1: "F23005",
                bgCor2: "8C0403",
                bgTitle1: "000000",
                bgTitle2: "000000",
                bgPrice1: "000000",
                bgPrice2: "000000",
                colorDescount: "000000",
                bgBotton1: "F23005",
                bgBotton2: "F23005",
                colorTextBotton: "FFFFFF",
            }

        },
        {
            titulo: 'Trimestral',
            descTitle: "Somente treino",
            desc: "Perfeito para quem busca consistência e quer começar a ver resultados reais",
            preco: 297,
            precoReal: 590,
            descount: 15,
            cores: {
                bgCor1: "F23005",
                bgCor2: "F20705",
                bgTitle1: "F25A05",
                bgTitle2: "F25A05",
                bgPrice1: "F25A05",
                bgPrice2: "F20705",
                colorDescount: "F28705",
                bgBotton1: "F23005",
                bgBotton2: "F23005",
                colorTextBotton: "FFFFFF",
            }

        },
        {
            titulo: 'Trimestral',
            descTitle: "Treino + Dieta",
            desc: "Perfeito para quem busca consistência e quer começar a ver resultados reais",
            preco: 470,
            precoReal: 1182,
            descount: 20,
            cores: {
                bgCor1: "F25A05",
                bgCor2: "F20705",
                bgTitle1: "F20705",
                bgTitle2: "8C0403",
                bgPrice1: "F20705",
                bgPrice2: "8C0403",
                colorDescount: "8C0403",
                bgBotton1: "8C0403",
                bgBotton2: "8C0403",
                colorTextBotton: "FFFFFF",
            }

        },
        {
            titulo: 'Semestral',
            descTitle: "Somente Treino",
            desc: "Para quem está decidido a transformar de vez seu corpo e sua rotina.",
            preco: 590,
            precoReal: 1182,
            descount: 50,
            cores: {
                bgCor1: "F29F05",
                bgCor2: "F2C36B",
                bgTitle1: "F25A05",
                bgTitle2: "F25A05",
                bgPrice1: "F20705",
                bgPrice2: "F28705",
                colorDescount: "F23005",
                bgBotton1: "F20705",
                bgBotton2: "F20705",
                colorTextBotton: "FFFFFF",
            }

        },
        {
            titulo: 'Semestral',
            descTitle: "Treino + Dieta",
            desc: "Para quem está decidido a transformar de vez seu corpo e sua rotina.",
            preco: 997,
            precoReal: 2364,
            descount: 57,
            cores: {
                bgCor1: "F29F05",
                bgCor2: "8C3403",
                bgTitle1: "F25A05",
                bgTitle2: "8C3403",
                bgPrice1: "F20705",
                bgPrice2: "F28705",
                colorDescount: "FFFFFF",
                bgBotton1: "F29F05",
                bgBotton2: "F2C36B",
                colorTextBotton: "F20705",
            }

        },
    ];

    return (
        <div className="planos-container">
            <div className="containerSpaceAdjust"></div>
            {planos.map((plano, index) => (
                <div className="package-card" key={index} style={{ background: `linear-gradient(135deg,#${plano.cores.bgCor1}, #${plano.cores.bgCor2})` }}>
                    <div className='containerTitlePackage' style={{ background: `linear-gradient(135deg,#${plano.cores.bgTitle1}, #${plano.cores.bgTitle2})` }}>
                        <h2 className="titlePackage" style={{ color: `#FFFFFF` }}>{plano.titulo}</h2>
                    </div>
                    <h3 className="descTitle" style={{ color: `#FFFFFF` }}>{plano.descTitle}</h3>

                    <p className="desc" style={{ color: `#FFFFFF` }}>{plano.desc}</p>
                    
                    
                    <p className='descountText'>{plano.preco !== plano.precoReal && (
                        <h3 className="descTitlePrice">R$ {plano.precoReal},00</h3>
                    )}
                            </p>
                    <p className='descountText'>{plano.descount > 0 && (
                        <span className="desconto" style={{ color: `#${plano.cores.colorDescount}` }}>
                            {" "}({plano.descount}% OFF)
                        </span>
                    )}
                    </p>
                    <div className="containerPricePackage" style={{ background: `linear-gradient(135deg,#${plano.cores.bgPrice1}, #${plano.cores.bgPrice2})`, marginBottom: '20px' }}>
                        <p className="priceText" style={{ color: `#FFFFFF` }}>
                            R$ {plano.preco},00
                        </p>
                    </div>
                    <button
                        className="bottonPackage"
                        style={{
                            background: `linear-gradient(135deg,#${plano.cores.bgBotton1}, #${plano.cores.bgBotton2})`,
                            color: `#${plano.cores.colorTextBotton}`
                        }}
                    >
                        Comprar
                    </button>
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

