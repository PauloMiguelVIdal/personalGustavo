import React from 'react';
import depois4 from "../images/depois4.jpg";
import antes4 from "../images/antes4.jpg";

const SobreMim = () => {
    return (
        <div className="sobre-mim-container">
            <div className='container2'>
                <h1 className="fonte4">EU ESTIVE NO SEU LUGAR!!!</h1>
            </div>
            <div className='containerSobreMim'>
                <div className='containerInternoSobreMim'>
                    <div containerTextoSobreMim>
                        <img src={antes4} alt="Antes" className="imagem-antes" style={{ marginBottom: "10px", width: "100%" }} />
                    </div>
                    <div className='containerTextoSobreMim'>
                        <p className='fonte3 parag'>
                            "Olá! Me chamo Gustavo. Já enfrentei o sobrepeso e sei como é difícil lidar com a autoestima baixa, o cansaço constante e a frustração de tentar de tudo e não ver resultados. Cada dia era uma luta contra a desmotivação, os excessos e a falta de energia. Me sentia preso em um ciclo que parecia não ter fim. "
                        </p>
                        <p className='fonte3 parag'>
                            "Mas foi nesse momento que percebi que precisava mudar. E com disciplina e novos hábitos, tudo começou a se transformar.
                        </p>
                    </div>
                </div>
                <div className='containerInternoSobreMim'>
                    <div containerTextoSobreMim>
                        <img src={depois4} alt="Antes" className="imagem-antes" style={{ marginBottom: "10px", width: "100%" }} />
                    </div>
                    <div className='containerTextoSobreMim'>

                        <p className='fonte3 parag'>
                            Hoje, como personal trainer, uso minha experiência pessoal para ajudar outras pessoas
                            a alcançarem seus objetivos e a viverem de forma mais saudável.
                        </p>
                        <a className='link' href="#planos" style={{ textDecoration: 'none', color: 'white' }}>
                            <button className='buttonCTA'>Comece sua jornada comigo</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SobreMim;


