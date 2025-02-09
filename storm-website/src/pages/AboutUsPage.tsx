import awardIcon from "../assets/TrofeuSt.svg";
import TeamMember from "../components/TeamMember";

import ArthurIcon from "../assets/Members/Foto Artur.png";
import FernandoQIcon from "../assets/Members/Foto Fernando.png";
import DianaIcon from "../assets/Members/Foto_Diana.png";
import ArturIcon from "../assets/Members/Foto Artur.png";
import GasparIcon from "../assets/Members/Foto Gaspar.png";
import GabrielIcon from "../assets/Members/Foto gabriel.png";
import BeatrizIcon from "../assets/Members/Foto beatriz.png";
import DaviIcon from "../assets/Members/Foto davi.png";
import IsabelaIcon from "../assets/Members/Foto Isabella.png";
import JoaoIcon from "../assets/Members/Foto Fernando.png";
import FernandoMIcon from "../assets/Members/Foto Fernando_tec.png";
import SofiaIcon from "../assets/Members/Foto sofia.png";

// import VictorIcon from "../assets/Members/ArthurIcon.png";
// import MiguelIcon from "../assets/Members/ArthurIcon.png";

import TimeLine from "../components/TimelineItem";
import RoverRuckus from "../assets/Seasons/RoverRuckus.png";
import SkyStone from "../assets/Seasons/SkyStone.png";
import UltimateGoal from "../assets//Seasons/UltimateGoal.png";
import FreightFrenzy from "../assets/Seasons/FreighFrenzy.png"
import PowerPlay from "../assets/Seasons/PowerPlay.png";
import CenterStage from "../assets/Seasons/CenterStage.png";
import IntoTheDeep from "../assets/Seasons/IntoTheDeep.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Member {
  name: string;
  role: string;
  photo: string;
}

interface Award {
  title: string;
  count: number;
}

interface Season {
  seasonName: string;
  photo: string;
}



const seasons: Season[] = [
  { seasonName: "ROVER RUCKUS (2018/19)", photo: RoverRuckus },
  { seasonName: "SKYSTONE (2019/20)", photo: SkyStone },
  { seasonName: "ULTIMATE GOAL (2020/21)", photo: UltimateGoal },
  { seasonName: "FREIGHT FRENZY (2021/22)", photo: FreightFrenzy },
  { seasonName: "POWER PLAY (2022/23)", photo: PowerPlay },
  { seasonName: "CENTER STAGE (2023/24)", photo: CenterStage },
  { seasonName: "INTO THE DEEP (2024/25)", photo: IntoTheDeep }
];

const teamMembers: Member[] = [

  { name: "Diana Pinho", role: "Technical TA", photo: DianaIcon },
  { name: "Fernando Monteiro", role: "Technical MCI", photo: FernandoMIcon },

  { name: "Fernando Quintanilha", role: "Programmer", photo: FernandoQIcon },
  { name: "Arthur Oliveira", role: "Designer", photo: ArthurIcon },
  { name: "Artur Alves", role: "Enginner", photo: ArturIcon },
  { name: "Gabriel Melo", role: "Outreach", photo: GabrielIcon },
  { name: "Isabella Rocha", role: "Designer", photo: IsabelaIcon },
  { name: "Gaspar Soudré", role: "Enginner", photo: GasparIcon },
  { name: "Beatriz Ferreira", role: "Thinker", photo: BeatrizIcon },
  { name: "Sofia Califani", role: "Business", photo: SofiaIcon },
  { name: "João Antônio", role: "CAD", photo: JoaoIcon },
  { name: "Davi Lemos", role: "CAD", photo: DaviIcon },

  // { name: "Diego Augusto", role: "Mentor", photo: DaviIcon },
  // { name: "Miguel Ramos", role: "Mentor", photo: MiguelIcon },
  // { name: "Victor Morais", role: "Mentor", photo: VictorIcon },
  // { name: "Rafael Castro", role: "Mentor", photo: VictorIcon },
  // { name: "João Victor Soudré", role: "Mentor", photo: DaviIcon },
];

const awards: Award[] = [
  { title: "Inspire AWARD", count: 10 },
  { title: "Aliança Finalista", count: 10 },
  { title: "Top Ranked Team Award", count: 10 },
  { title: "Think Award", count: 10 },
  { title: "Aliança Vencedora", count: 10 },
  { title: "Motivate Award", count: 10 },
  { title: "Control Award", count: 10 },
  { title: "Compass Award", count: 10 },
];

function AboutUsPage() {

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="flex flex-col justify-start items-start py-8 ml-28 gap-2">
        <h1 className="text-8xl font-black text-roxo font-montserrat">STORMTECH #16054</h1>
        <span className="bg-roxo text-white rounded-4xl border-8 border-roxo font-montserrat text-4xl">
          TIME 24/25:
        </span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 justify-center place-items-center mt-6 w-full max-w-full">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} photo={member.photo} />
        ))}
      </div>

      <div className="bg-roxo text-white p-10">
        <h1 className="font-black text-8xl text-center mb-10">LINHA DO TEMPO:</h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full max-w-6xl"
        >
          {seasons.map((season, index) => (
            <SwiperSlide key={index} className="">
              <TimeLine photo={season.photo} seasonName={season.seasonName} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-start items-start gap-16 bg-roxo text-white font-montserrat font-bold text-4xl">
        <div className="mt-20 ml-14">
          <ul className="columns-2 my-6">
            {awards.map((award, index) => (
              <li key={index} className="p-3">
                {award.count}x {award.title}
              </li>
            ))}
          </ul>
        </div>
        <img src={awardIcon} alt="Troféu" />
      </div>
    </nav>
  );
}

export default AboutUsPage;