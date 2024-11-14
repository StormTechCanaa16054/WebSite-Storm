import React from "react";
import Youtube from "react-youtube";
import fotofirst from "../assets/FotoFIRST.png";
import logofirst from "../assets/LogoFIRST.png";

const FirstPage: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fotofirst})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-start p-6">
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <h1 className="text-4xl md:text-8xl text-purple-700 font-extrabold">
            FIRST Global Challenge
          </h1>
          <img src={logofirst} alt="Logo FGC" className="w-72 md:w-80" />
        </div>

        <div className="flex md:flex-row mt-8 gap-40">
          <div className="flex-1 max-w-lg">
            <Youtube videoId="VoT_eVi7vQ0" />
          </div>
          <p className="text-lg md:text-3xl font-black text-left max-w-xl">
            O FIRST Global Challenge é uma competição anual de robótica
            organizada pela International First Committee Association. Promove a
            educação e carreiras STEM para jovens e foi criada por Dean Kamen em
            2016 como uma expansão da FIRST, uma organização com objetivos
            semelhantes.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
