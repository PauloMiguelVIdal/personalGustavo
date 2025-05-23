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
                    <iframe className='video'
                        style={{ width: '100%', height: '100%', maxWidth: '800px', maxHeight: '450px', margin: '20px auto 20px' }}
                        src="https://www.youtube.com/embed/FkFE2H2loPg"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
       

                <div className="home-text">
                    <h1 style={{ color:"white", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center', margin: '1rem 0' }}>
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