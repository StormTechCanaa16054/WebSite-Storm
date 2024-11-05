import fotofgc from "../assets/foto-fgc.png";
import Youtube from "react-youtube";
import logofgc from "../assets/logo-fgc.png";

export default function FgcPage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fotofgc})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-100"></div>
      <div className="ml-10 relative z-10 h-full p-6 flex flex-col py-40">
        <div className="flex items-center gap-10">
          <h1 className="md:text-8xl text-roxo font-black">
            FIRST Global Challenge
          </h1>
          <img className="" src={logofgc} />
        </div>
        <div className="flex mt-8 gap-7">
          <Youtube videoId="" />
          <h1 className="text-3xl font-black text-left">
            O FIRST Global Challenge é uma competição anual de <br />
            robótica organizada pela International First Committee <br />
            Association. Promove a educação e carreiras STEM para <br />
            jovens e foi criada por Dean Kamen em 2016 como uma <br />
            expansão da FIRST, uma organização com objetivos semelhantes.
          </h1>
        </div>
      </div>
    </div>
  );
}
