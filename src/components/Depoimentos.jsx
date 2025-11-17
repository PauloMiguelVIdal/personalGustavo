import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import antes1 from "../images/antes1.jpg";
import depois1 from "../images/depois1.jpg";  
import antes2 from "../images/antes2.jpg";
import depois2 from "../images/depois2.jpg";        
import antes3 from "../images/antes3.jpg";
import img1 from "../images/antesDepois1.jpg";
import img2 from "../images/antesDepois2.jpg";
import img3 from "../images/antesDepois3.jpg";
import depois3 from "../images/depois3.jpg";
import { useEffect,useState } from "react";
const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const depoimentos = [
    { id: 1, imagem: img1 },
    { id: 2, imagem: img2 },
    { id: 3, imagem: img3 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-16">
          Veja o antes e depois dos meus alunos
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {depoimentos.map((depo) => (
                <div key={depo.id} className="min-w-full">
                  <img 
                    src={depo.imagem} 
                    alt={`Transformação ${depo.id}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 w-12' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};




export default Depoimentos;
