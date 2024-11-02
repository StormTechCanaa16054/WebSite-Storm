import React from 'react';
import PlayerCard from '../components/playercard';

const Team: React.FC = () => {
  const players = Array(9).fill({
    name: 'Arthur Oliveira',
    seasons: 4,
    position: 'AE',
    imageSrc: '/path/to/image.jpg', 
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        STORMTECH #16054
      </h1>
      <h2 className="text-lg font-semibold text-primary text-center mb-6">
        TIME 24/25:
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            seasons={player.seasons}
            position={player.position}
            imageSrc={player.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
