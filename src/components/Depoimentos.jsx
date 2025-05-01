import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import antes1 from "../images/antes1.jpg";
import depois1 from "../images/depois1.jpg";  
import antes2 from "../images/antes2.jpg";
import depois2 from "../images/depois2.jpg";        
import antes3 from "../images/antes3.jpg";
import depois3 from "../images/depois3.jpg";

const Depoimentos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const getImageUrl = (nomeArquivo) => `../images/${nomeArquivo}.jpg`;


    const depoimentos = [
        {
            id: 1,
            antes: antes1,
            depois: depois1,
            texto: "O resultado foi incrível! Recomendo muito.",
        },
        {
            id: 2,
            antes: antes2,
            depois: depois2,
            texto: "O resultado foi incrível! Recomendo muito.",
        },
        {
            id: 3,
            antes: antes3,
            depois: depois3,
            texto: "O resultado foi incrível! Recomendo muito.",
        },
        // Adicione mais depoimentos aqui
    ];

    return (
        <div className="depoimentos-container">
            <h2>Depoimentos</h2>
            <Slider {...settings}>
                {depoimentos.map((depoimento) => (
                    <div key={depoimento.id} className="depoimento-item">
                        <div className="imagens" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={depoimento.antes} alt="Antes" className="imagem-antes" style={{ marginBottom: "10px" }} />
                            <img src={depoimento.depois} alt="Depois" className="imagem-depois" />
                        </div>
                        <p className="texto">{depoimento.texto}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};





export default Depoimentos;
