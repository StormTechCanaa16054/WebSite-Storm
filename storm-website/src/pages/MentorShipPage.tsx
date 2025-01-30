import Buttons from "../components/MentorShipComp";
import documentIcon from "../assets/document.svg";
import videoIcon from "../assets/video.svg";

const MentorShip = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-10">
        FIRST Tech Challenge
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
    
        <Buttons
          title="Documentos da temporada"
          description="Documentos da temporada 24/25"
          link="/docs/temporada-24-25.pdf"
          buttonText="Leia agora"
          icon={documentIcon}
          isDownload={true}
        />


        <Buttons
          title="Guia da FLL"
          description="Guia da FLL"
          link="https://forms.google.com/guia-fll"
          buttonText="Leia agora"
          icon={documentIcon}
        />



        <Buttons
          title="Fala Tempestade"
          description="Fala Tempestade - João Quintanilha"
          link="https://www.youtube.com/watch?v=EXEMPLO"
          buttonText="Veja agora"
          icon={videoIcon}
        />
      </div>
    </div>
  );
};

export default MentorShip;
