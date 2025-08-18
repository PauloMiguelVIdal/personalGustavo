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
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ymwN3oI-GLk?rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
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