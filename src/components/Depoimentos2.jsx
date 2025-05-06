import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/antesDepois1.jpg";
import img2 from "../images/antesDepois2.jpg";
import img3 from "../images/antesDepois3.jpg";
const Depoimentos = () => {


    const depoimentos = [
        {
            id: 1,
            imagem: img1
        },
        {
            id: 2,
            imagem: img2
        },
        {
            id: 3,
            imagem: img3
        },
       
        // Adicione mais depoimentos aqui
    ];

    return (
        <div className="depoimentos-container">
            <h2 className="fonte2">Veja o antes e depois dos meus alunos</h2>
            <div className="depoimentos-container2">
                {depoimentos.map((depoimento) => (
                    <div key={depoimento.id} className="depoimento-item">
                        <div className="imagens" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={depoimento.imagem} alt="Antes" className="imagem-antes" style={{ marginBottom: "10px", width:"100%"}} />
                        </div>
                        {depoimento.texto && <p className="texto">{depoimento.texto}</p>}
                    </div>
                ))}
                </div>
        </div>
    );
};





export default Depoimentos;
