import awardIcon from "../assets/TrofeuSt.svg";
import TeamMember from "../components/TeamMember";

import ArthurIcon from "../assets/ArthurIcon.png";
import FernandoQIcon from "../assets/ArthurIcon.png";
import DianaIcon from "../assets/ArthurIcon.png";
import ArturIcon from "../assets/ArthurIcon.png";
import GasparIcon from "../assets/ArthurIcon.png";
import GabrielIcon from "../assets/ArthurIcon.png";
import BeatrizIcon from "../assets/ArthurIcon.png";
import DaviIcon from "../assets/ArthurIcon.png";
import IsabelaIcon from "../assets/ArthurIcon.png";
import JoaoIcon from "../assets/ArthurIcon.png";
import FernandoMIcon from "../assets/ArthurIcon.png";
import SofiaIcon from "../assets/ArthurIcon.png";

import VictorIcon from "../assets/vitao.jpeg";
import MiguelIcon from "../assets/miguelzao.jpeg";

import { default as TimeLine } from "../components/TimeLineItem";
import RoverRuckus from "../assets/RoverRuckus.png";
import SkyStone from "../assets/SkyStone.png";
import UltimateGoal from "../assets/UltimateGoal.png";
import FreightFrenzy from "../assets/FreighFrenzy.png";
import PowerPlay from "../assets/PowerPlay.png";
import CenterStage from "../assets/CenterStage.png";
import IntoTheDeep from "../assets/IntoTheDeep.png";

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
  { name: "Isabela Alves", role: "Designer", photo: IsabelaIcon },
  { name: "Gaspar Soudré", role: "Enginner", photo: GasparIcon },
  { name: "Beatriz Ferreira", role: "Thinker", photo: BeatrizIcon },
  { name: "Sofia Califani", role: "Business", photo: SofiaIcon },
  { name: "João Antônio", role: "CAD", photo: JoaoIcon },
  { name: "Davi Lemos", role: "CAD", photo: DaviIcon },

  { name: "Diegao Do pirocao", role: "Mentor", photo: DaviIcon },
  { name: "Miguelzao", role: "Mentor", photo: MiguelIcon },
  { name: "Victor Morais", role: "Mentor", photo: VictorIcon },

  { name: "SOUDRE", role: "Mentor", photo: DaviIcon },
];

const awards: Award[] = [
  { title: "Inspire AWARD", count: 7 },
  { title: "Aliança Finalista", count: 3 },
  { title: "Top Ranked Team Award", count: 1 },
  { title: "Think Award", count: 1 },
  { title: "Aliança Vencedora", count: 2 },
  { title: "Motivate Award", count: 1 },
  { title: "Control Award", count: 1 },
  { title: "Compass Award", count: 1 },
];

function AboutUsPage() {
  return (
    <nav>
      <div className="flex flex-col justify-start items-start py-8 ml-28 gap-2">
        <h1 className="text-8xl font-black text-roxo font-montserrat">STORMTECH #16054</h1>
        <span className="bg-roxo text-white rounded-4xl border-8 border-roxo font-montserrat text-4xl">
          TIME 24/25:
        </span>
      </div>

      <div className="flex flex-col justify-start items-center p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>
      </div>

      <div className="bg-roxo flex flex-col justify-center items-center text-white gap-10">
        <h1 className="font-black text-8xl mx-auto">LINHA DO TEMPO</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {seasons.map((season, index) => (
            <TimeLine
              key={index}
              photo={season.photo}
              seasonName={season.seasonName}
            />
          ))}
        </div>
      </div>


      <div className="flex justify-start items-start gap-16 bg-roxo text-white font-montserrat font-bold text-4xl">
        <div className="mt-20 ml-14">
          <ul className="columns-2">
            {awards.map((award, index) => (
              <li key={index} className="my-2">
                {award.count}x {award.title}
              </li>
            ))}
          </ul>
        </div>
        <img src={awardIcon} alt="Trofeu" />
      </div>
    </nav>
  );
}

export default AboutUsPage;