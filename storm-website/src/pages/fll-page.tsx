import fotolife from "../assets/FLL.png";
import Youtube from "react-youtube";
import logolife from "../assets/Logo-LIFE 1.png";

export default function FllPage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fotolife})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-100"></div>
      <div className="ml-10 relative z-10 h-full p-6 flex flex-col py-40">
        <div className="flex items-center gap-10">
          <h1 className="md:text-7xl text-roxo font-black">
            FIRST Lego League Challenge
          </h1>
          <img className="" src={logolife} />
        </div>
        <div className="flex mt-8 gap-7">
          <Youtube videoId="https://youtu.be/9keeDyFxzY4?si=Mgd_ngQR4FVTByZ1" />
          <h1 className="text-3xl font-black text-left">
            FIRST LEGO League Challenge, também conhecida <br />
            como FIRST LEGO League ou pela sigla FLL, é um <br />
            programa internacional sem fins lucrativos, para <br />
            jovens com idades de 9 a 14 anos nos Estados Unidos <br />
            da América e no Canadá, e de 9 a 15 anos nos demais <br />
            países, no Brasil, de 9 a 15 anos.
          </h1>
        </div>
      </div>
    </div>
  );
}
