import React from "react";

const PlanosConsultoria = () => {
  const planos = [
    {
      titulo: "Mensal",
      descTitle: "Somente Treino",
      desc: "Para quem quer ter a primeira experiência com a sua melhor versão",
      preco: 197,
      gradient: "from-red-600 to-red-700",
      popular: false,
      link: "https://api.whatsapp.com/send?phone=5517996296401&text=Olá,%20gostaria%20de%20realizar%20o%20pagamento%20do%20plano%20Mensal%20de%20Somente%20Treino%20por%20R$%20197,00.",
    },
    {
      titulo: "Mensal",
      descTitle: "Treino e Dieta",
      desc: "Para quem quer ter a primeira experiência com a sua melhor versão",
      preco: 397,
      gradient: "from-red-600 via-red-700 to-orange-600",
      popular: false,
      link: "https://api.whatsapp.com/send?phone=5517996296401&text=Olá,%20gostaria%20de%20realizar%20o%20pagamento%20do%20plano%20Mensal%20de%20Treino%20e%20Dieta%20por%20R$%20397,00.",
    },
    {
      titulo: "Trimestral",
      descTitle: "Somente Treino",
      desc: "Perfeito para quem busca consistência e quer começar a ver resultados reais",
      preco: 297,
      descount: 15,
      gradient: "from-red-600 via-orange-500 to-orange-600",
      popular: false,
      link: "https://api.whatsapp.com/send?phone=5517996296401&text=Olá,%20quero%20fazer%20a%20assinatura%20Trimestral%20de%20Somente%20Treino%20por%20R$%20297,00.",
    },
    {
      titulo: "Trimestral",
      descTitle: "Treino e Dieta",
      desc: "Perfeito para quem busca consistência e quer começar a ver resultados reais",
      preco: 470,
      descount: 20,
      gradient: "from-orange-500 via-red-600 to-red-800",
      popular: true,
      link: "https://api.whatsapp.com/send?phone=5517996296401&text=Olá,%20quero%20fazer%20a%20assinatura%20Trimestral%20de%20Treino%20e%20Dieta%20por%20R$%20470,00.",
    },
    {
      titulo: "Semestral",
      descTitle: "Somente Treino",
      desc: "Para quem está decidido a transformar de vez seu corpo e sua rotina.",
      preco: 497,
      descount: 50,
      gradient: "from-orange-400 via-orange-500 to-yellow-500",
      popular: false,
      link: "https://api.whatsapp.com/send?phone=5517996296401&text=Olá,%20quero%20fazer%20a%20assinatura%20Semestral%20de%20Somente%20Treino%20por%20R$%20497,00.",
    },
    {
      titulo: "Semestral",
      descTitle: "Treino e Dieta",
      desc: "Para quem está decidido a transformar de vez seu corpo e sua rotina.",
      preco: 797,
      descount: 57,
      gradient: "from-orange-400 via-orange-600 to-red-700",
      popular: false,
      link: "https://api.whatsapp.com/send?phone=5517996296401&text=Olá,%20quero%20fazer%20a%20assinatura%20Semestral%20de%20Treino%20e%20Dieta%20por%20R$%20797,00.",
    },
  ];

  return (
    <div
      id="planos"
      className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`relative group ${
                plano.popular ? "md:scale-110 z-10" : ""
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div
                className={`relative bg-gradient-to-br ${plano.gradient} p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30`}
              >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative z-10 text-center">
                  <div className="inline-block bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                    <h2 className="text-2xl font-black text-white">
                      {plano.titulo}
                    </h2>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {plano.descTitle}
                  </h3>

                  <p className="text-white/90 text-sm mb-8 leading-relaxed">
                    {plano.desc}
                  </p>

                  {plano.descount > 0 && (
                    <div className="mb-4">
                      <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                        {plano.descount}% OFF
                      </span>
                    </div>
                  )}

                  <div className="bg-black/40 backdrop-blur-sm py-6 px-4 rounded-2xl mb-8">
                    <p className="text-4xl font-black text-white">
                      R$ {plano.preco}
                      <span className="text-lg">,00</span>
                    </p>
                  </div>

                  <a
                    href={plano.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      Comprar
                    </button>
                  </a>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanosConsultoria;
