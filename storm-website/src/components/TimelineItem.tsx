interface TimeLineProps {
  photo: string;
  seasonName: string;
}

const TimeLineItem: React.FC<TimeLineProps> = ({ photo, seasonName }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={photo}
        alt={seasonName}
        className="rounded-3xl object-cover p-3"
      />
      <h2 className="text-xl font-extrabold mt-2">{seasonName}</h2>
    </div>
  );
};

export default TimeLineItem;
