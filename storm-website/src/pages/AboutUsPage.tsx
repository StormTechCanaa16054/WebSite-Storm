import awardIcon from "../assets/TrofeuSt.svg";
import TeamMember from "../components/TeamMember";
import TimeLine from "../components/TimelineItem";

import ArthurIcon from "../assets/Members/IconArthur.png";
import FernandoQIcon from "../assets/Members/IconFernando.png";
import DianaIcon from "../assets/Members/Foto_Diana.png";
import ArturIcon from "../assets/Members/IconArtur.png";
import GasparIcon from "../assets/Members/IconGaspar.png";
import GabrielIcon from "../assets/Members/IconGabriel.png";
import BeatrizIcon from "../assets/Members/IconBeatriz.png";
import DaviIcon from "../assets/Members/IconDavi.png";
import IsabelaIcon from "../assets/Members/IconIsabella.png";
import JoaoIcon from "../assets/Members/IconJoão.png";
import FernandoMIcon from "../assets/Members/Foto Fernando_tec.png";
import SofiaIcon from "../assets/Members/IconSofia.png";

import RoverRuckus from "../assets/Seasons/RoverRuckus.png";
import SkyStone from "../assets/Seasons/SkyStone.png";
import UltimateGoal from "../assets//Seasons/UltimateGoal.png";
import FreightFrenzy from "../assets/Seasons/FreighFrenzy.png";
import PowerPlay from "../assets/Seasons/PowerPlay.png";
import CenterStage from "../assets/Seasons/CenterStage.png";
import IntoTheDeep from "../assets/Seasons/stormintothedeep.png";

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

const awards = [
  { name: "Inspire Award", role: "7x" },
  { name: "Aliança Finalista", role: "2x" },
  { name: "Top Ranked Team Award", role: "1x" },
  { name: "Think Award", role: "1" },
  { name: "Aliança Vencedora", role: "2x" },
  { name: "Motivate Award", role: "1x" },
  { name: "Control Award", role: "1x" },
  { name: "Compasss Award", role: "1x" },
];



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

      <section>
        <div className="flex justify-center flex-wrap gap-8 text-roxo">
          {technicalTeam.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} photo={member.photo} />

          ))}
        </div>
      </section>

      <section className="">
        <h2 className="text-4xl text-white font-bold mb-6">Equipe</h2>
        <div className="flex justify-center flex-wrap gap-8 text-roxo">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} photo={member.photo} />
          ))}
        </div>
      </section>

      <div className="bg-roxo">
        <div className="text-white p-10 mt-16">
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

        {/* <h1 className="flex justify-center text-white font-black text-8xl mt-32 mb-20">PREMIAÇÕES:</h1>
        <section className="py-10 flex justify-start">
          <div className="max-w-6xl w-full flex">
            <div className="grid grid-cols-2 gap-80 flex-grow ml-14 md:ml-16 lg:ml-20">
              {awards.map((award, index) => (
                <div key={index} className="text-5xl font-extrabold text-white whitespace-nowrap">
                  {award.name} ({award.role})
                </div>
              ))}
            </div>
            <img src={awardIcon} alt="Award Icon" className="w-4/5 ml-32" />
          </div>
        </section> */}
      </div>
    </nav>
  );
}

export default AboutUsPage;