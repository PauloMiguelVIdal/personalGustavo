import React from 'react';
import logo from "../images/logo.png"; // Import the logo image

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Efeito de grid futurista no fundo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-orange-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <header className="relative z-10 flex items-center justify-center gap-2 sm:gap-4 md:gap-6 py-8 px-4">
        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 tracking-wider animate-pulse-slow">
          GUSTAVO
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gray-900 to-red-600 flex items-center justify-center shadow-2xl shadow-orange-500/50 border-2 border-gray-900 p-2 sm:p-3 md:p-4">
          <img className="w-full h-full object-contain" src={logo} alt="Logo" />
        </div>
        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 tracking-wider animate-pulse-slow">
          HONGARO
        </div>
      </header>

      <main className="relative z-10 px-4 py-12 max-w-6xl mx-auto">
        <div className="relative mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/UpKz09vMSgA?rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3&vq=hd1080"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Transforme Seu Corpo com
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mt-2">
              Estratégia e Consistência
            </span>
          </h1>
          
          <a href="#planos" className="inline-block group">
            <button className="relative px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
              <span className="relative z-10">Comece sua jornada agora mesmo!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </main>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(242, 48, 5, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242, 48, 5, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;