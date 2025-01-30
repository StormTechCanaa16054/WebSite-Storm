import { FC } from "react";

interface MentorShips {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  icon: string;
  isDownload?: boolean;
}

const MentorShipsComp: FC<MentorShips> = ({ title, description, link, buttonText, icon, isDownload = false }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-72 text-center">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h2 className="text-xl font-bold text-purple-600">{description}</h2>
      <a
        href={link}
        download={isDownload} 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-lg text-lg font-bold hover:bg-purple-800 transition-all"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default MentorShipsComp;