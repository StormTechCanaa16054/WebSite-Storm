import fotoinfinity from "./foto-infinity.png";
import Youtube from "react-youtube";
import logoinfinity from "./logo-infinity.png";

export default function FrcPage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fotoinfinity})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-100"></div>
      <div className="relative z-10 h-full p-6 flex flex-col py-40">
        <div className="flex items-center gap-3">
          <h1 className="md:text-7xl text-roxo font-black">
            FIRST Robotics Competition
          </h1>
          <img className="" src={logoinfinity} />
        </div>
        <div className="flex mt-12 gap-7">
          <Youtube videoId="https://youtu.be/9keeDyFxzY4?si=Mgd_ngQR4FVTByZ1" />
          <h1 className="text-3xl font-black text-left">
            FIRST Robotics Competition (FRC) é uma competição <br />
            de robótica internacional com foco em alunos do <br />
            ensino médio organizada pela FIRST. A cada ano, <br />
            times de alunos e mentores trabalham durante um <br />
            período de aproximadamente 6 semanas para construir <br />
            um robô capaz de participar das atividades da <br />
            competição, cujo peso pode chegar a quase 125 lb <br />
            (57 kg).
          </h1>
        </div>
      </div>
    </div>
  );
}
