import React from 'react';
import alvo from "../icons/alvo.png";
import ajuste from "../icons/ajuste.png";
import app from "../icons/app.png";
import suporte from "../icons/suporte.png";


const PlanosGerais = () => {

    const Base = [
        {
            text: "Todos os planos os treinos são individuais, específicos para seu caso, objetivo e necessidade.",
            icon: alvo,
        },
        {
            text: "Treinos organizados com vídeos de demonstração de cada exercício, direto no app.",
            icon: app,
        },
        {
            text: "Feedback semanal com correção de exercícios diários do protocolo",
            icon: ajuste,
        },
        {
            text: "Suporte diário para tirar qualquer dúvida.",
            icon: suporte,
        },
    ];




    return (
        <div className='containerPlanosGerais'>
            <h1 className='titleText'>CONSULTORIA ONLINE</h1>
            <div className='spaceContainer'></div>
            <div className='containerPlanosGerais'>
                {Base.map((item, index) => (
                    <div key={index} className='containerOptions' >

                        <div className='containerIcon'>
                            <img
                                src={item.icon}
                                alt="icon"
                                style={{ width: '40px', height: '40px', itemsAlign: 'center' }}
                            />
                        </div>
                        <p className='textIcon'>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className='containerTextCentral'>
                <h1 className='titleText'>PLANOS DE CONSULTORIA</h1>
            </div>
        </div>
    );
};

export default PlanosGerais;