import logostorm from "./foto-storm.png";
import Youtube from "react-youtube";

export default function FtcPage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${logostorm})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-100"></div>
      <div className="relative z-10 h-full p-6 flex flex-col py-40">
        <h1 className="text-4x1 md:text-8xl text-roxo font-black">
          FIRST Tech Challenge
        </h1>
        <div className="flex mt-20 gap-7">
          <Youtube videoId="zSTSgdeaSRM" />
          <h1 className="text-3xl font-black text-left">
            FIRST Tech Challenge, anteriormente conhecido <br />
            como FIRST Vex Challenge, é uma competição de <br />
            robótica para alunos do 7º ao 12ºano competirem <br />
            frente a frente, projetando, construindo e <br />
            programando um robô para competir em formato de <br />
            aliança contra outras equipes.
          </h1>
        </div>
      </div>
    </div>
  );
}
