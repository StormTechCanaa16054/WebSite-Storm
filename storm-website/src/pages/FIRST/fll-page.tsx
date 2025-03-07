import fotolife from "../../assets/Teams/FLL.png";
import Youtube from "react-youtube";
import logolife from "../../assets/Logos/Logo-LIFE.png";

function FllPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${fotolife})`, 
        backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 min-h-screen p-6 flex flex-col py-40">
        <div className="flex items-center gap-10 ml-10">
          <h1 className="md:text-7xl text-roxo font-black">
            FIRST Lego League Challenge
          </h1>
          <img className="w-52 md:w-52" src={logolife} />
        </div>

        <div className="flex mt-8 gap-7 ml-10">
          <Youtube videoId="J5u-2q_K3O0" />
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

export default FllPage;
