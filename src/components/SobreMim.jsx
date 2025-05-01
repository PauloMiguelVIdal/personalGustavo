import React from 'react';
import depois4  from "../images/depois4.jpg";
import antes4  from "../images/antes4.jpg";

const SobreMim = () => {
    return (
        <div className="sobre-mim-container">
            <h1>Minha Jornada de Transformação</h1>
            <p>
                Olá! Meu nome é Gustavo, e quero compartilhar com vocês a minha história de superação. 
                Durante muito tempo, enfrentei desafios com meu peso e minha saúde. No entanto, com 
                dedicação, disciplina e mudanças no estilo de vida, consegui transformar completamente 
                meu corpo e minha mente.
            </p>
            <p>
                Hoje, como personal trainer, uso minha experiência pessoal para ajudar outras pessoas 
                a alcançarem seus objetivos e a viverem de forma mais saudável. Acredite: com esforço 
                e determinação, você também pode conquistar grandes resultados!
            </p>
            <div className="fotos-transformacao">
                <div className="foto">
                    <h3>Antes</h3>
                    <img src={antes4} alt="Foto de antes da transformação" />
                </div>
                <div className="foto">
                    <h3>Depois</h3>
                    <img src={depois4} alt="Foto de depois da transformação" />
                </div>
            </div>
        </div>
    );
};

export default SobreMim;


