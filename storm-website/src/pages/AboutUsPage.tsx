import timeline from "../assets/Timeline.svg";
import trofeu from "../assets/TrofeuSt.svg";
import storm from "../assets/storm.svg";
function AboutUsPage() {

  return (
    <nav>
      <></>
      <div>
      <h1 className="text-5xl font-black text-roxo font-montserrat">STORMTECH #16054</h1>
      <span className="bg-roxo text-white rounded-2xl border-4 border-roxo font-montserrat"> TIME 24/25 </span>
      <img src={storm} className="flex justify-center items-center"/>
      </div>
      <div className="bg-roxo flex flex-col justify-center items-center gap-10">
        <h1 className="text-white font-black text-6xl">LINHA DO TEMPO</h1>
        <img src={timeline} />
        <h1 className="text-white font-black text-6xl">PREMIAÇÕES</h1>
      </div>
      <div className="flex justify-start items-start gap-16 bg-roxo text-white font-montserrat font-bold text-4xl">
        <div className="mt-20  ml-14">
          <ul>
            <li> 6x Inspire AWARD </li>
            <br />
            <li> 2x Aliança Finalista </li>
            <br />
            <li> 1x Top Ranked Team Award </li>
            <br />
            <li> 1x Think Award </li>
          </ul>
        </div>
        <div className="mt-20">
          <ul>
            <li> 2x Aliança Vencedora  </li>
            <br />
            <li> 1x Motivate Award </li>
            <br />
            <li> 1x Control Award </li>
            <br />
            <li> 1x Compass Award </li>


          </ul>
        </div>
        <img src={trofeu} />
      </div>
    </nav>
  );
};

export default AboutUsPage;