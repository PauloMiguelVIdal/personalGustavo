import React from 'react';
import logo from "../images/logo.png"; // Import the logo image

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="home-title">GUSTAVO</div>
                <img className="home-logo" src={logo} alt="Logo" />
                <div className="home-title">HONGARO</div>
            </header>
            <main className="home-main">
            <div
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "900px", // largura máxima no PC
    margin: "20px auto", // centraliza
    aspectRatio: "16 / 9", // mantém a proporção correta em qualquer tela
  }}
>
  <iframe
    src="https://www.youtube.com/embed/ymwN3oI-GLk?rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3&vq=hd1080"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "10px",
    }}
  ></iframe>
</div>


                <div className="home-text">
                    <h1 style={{ color: "white", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center', margin: '1rem 0' }}>
                        Transforme Seu Corpo com
                        Estratégia e Consistência
                    </h1>
                    <a className='link'
                        href="#planos" style={{ textDecoration: 'none', color: 'white' }}>


                        <button className="buttonCTA" style={{ padding: '0.5rem 1rem', fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
                            Comece sua jornada agora mesmo!
                        </button>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Home;