import React from 'react';

interface PlayerCardProps {
  name: string;
  seasons: number;
  position: string;
  imageSrc: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, seasons, position, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt={name} className="w-24 h-32 rounded-lg mb-2" />
      <h3 className="text-lg font-bold text-primary">{name}</h3>
      <div className="flex items-center mt-1">
        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
          {seasons}
        </div>
        <span className="bg-primary text-white rounded-full px-2 py-1 text-xs">
          {position}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">Temporadas</p>
    </div>
  );
};

export default PlayerCard;
