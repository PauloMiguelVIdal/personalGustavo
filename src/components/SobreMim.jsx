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

                <img src={antes4} alt="Antes" className="imagem-antes" style={{ marginBottom: "10px", width: "100%" }} />
                <p className='fonte3 parag'>
                    "Olá! Sou o Gustavo. Já enfrentei o sobrepeso, mas com disciplina e mudança de hábitos, transformei meu corpo — e minha vida."
                </p>
                <img src={depois4} alt="Antes" className="imagem-antes" style={{ marginBottom: "10px", width: "100%" }} />
                <p className='fonte3 parag'>
                    Hoje, como personal trainer, uso minha experiência pessoal para ajudar outras pessoas
                    a alcançarem seus objetivos e a viverem de forma mais saudável.
                </p>
                <a className='link' href="#planos" style={{ textDecoration: 'none', color: 'white' }}>
                <button className='buttonCTA'>Comece sua jornada comigo</button>
                    </a>
            </div>
        </div>
    );
};

export default SobreMim;


