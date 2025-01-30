interface TimeLineProps {
  photo: string;
  seasonName: string;
}

const TimeLineItem: React.FC<TimeLineProps> = ({ photo, seasonName }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={photo}
        alt={seasonName}
        className="rounded-3xl w-3/5 p-3"
      />
      <h2 className="text-xl font-extrabold">{seasonName}</h2>
    </div>
  );
};

export default TimeLineItem; 