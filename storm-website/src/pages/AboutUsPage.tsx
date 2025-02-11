import awardIcon from "../assets/TrofeuSt.svg";
import TeamMember from "../components/TeamMember";
import TimeLine from "../components/TimelineItem";

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

import RoverRuckus from "../assets/Seasons/RoverRuckus.png";
import SkyStone from "../assets/Seasons/SkyStone.png";
import UltimateGoal from "../assets//Seasons/UltimateGoal.png";
import FreightFrenzy from "../assets/Seasons/FreighFrenzy.png";
import PowerPlay from "../assets/Seasons/PowerPlay.png";
import CenterStage from "../assets/Seasons/CenterStage.png";
import IntoTheDeep from "../assets/Seasons/IntoTheDeep.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Member {
  name: string;
  role: string;
  photo: string;
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

const technicalTeam: Member[] = [
  { name: "Diana Pinho", role: "Técnica TA", photo: DianaIcon },
  { name: "Fernando Monteiro", role: "Técnico MCI", photo: FernandoMIcon },
];

const teamMembers: Member[] = [
  { name: "Arthur Oliveira", role: "Designer", photo: ArthurIcon },
  { name: "Artur Alves", role: "Engenheiro", photo: ArturIcon },
  { name: "Beatriz Ferreira", role: "Thinker", photo: BeatrizIcon },
  { name: "Davi Lemos", role: "CAD", photo: DaviIcon },
  { name: "Fernando Quintanilha", role: "Programador", photo: FernandoQIcon },
  { name: "Gabriel Melo", role: "Outreach", photo: GabrielIcon },
  { name: "Gaspar Soudré", role: "Engenheiro", photo: GasparIcon },
  { name: "Isabella Rocha", role: "Designer", photo: IsabelaIcon },
  { name: "João Antônio", role: "CAD", photo: JoaoIcon },
  { name: "Sofia Califani", role: "Negócios", photo: SofiaIcon },

];

function AboutUsPage() {
  return (
    <nav>
      <div className="flex flex-col justify-center items-center py-8 gap-4">
        <h1 className="text-8xl font-black text-roxo font-montserrat text-center">
          STORMTECH #16054
        </h1>
        <span className="bg-roxo text-white rounded-4xl border-8 border-roxo font-montserrat text-4xl px-6 py-2">
          TIME 24/25:
        </span>
      </div>

      {/* Técnicos */}
      <section className="w-full max-w-screen-lg mx-auto mb-12 text-center">
        <h2 className="text-4xl text-white font-bold mb-6">Técnicos</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {technicalTeam.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center w-64"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-28 h-28 rounded-full shadow-md object-cover mb-4"
              />
              <h3 className="text-white font-bold text-xl">{member.name}</h3>
              <p className="text-purple-400 text-lg font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-6">Equipe</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} photo={member.photo} />
          ))}
        </div>
      </section>

      <div className="bg-roxo text-white p-10 mt-16">
        <h1 className="font-black text-8xl text-center mb-10">LINHA DO TEMPO:</h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full max-w-6xl mx-auto"
        >
          {seasons.map((season, index) => (
            <SwiperSlide key={index}>
              <TimeLine photo={season.photo} seasonName={season.seasonName} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </nav>
  );
}

export default AboutUsPage;
