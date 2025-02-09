interface TeamMemberProps {
  name: string;
  role: string;
  photo: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, photo }) => {
  return (
    <div className="flex flex-col items-center text-center text-roxo scale-90 md:scale-75">
      <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-3xl overflow-hidden border-4">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>

      <h2 className="mt-1 text-sm md:text-base lg:text-lg font-bold">{name}</h2>
      <span className="text-gray-600 text-xs md:text-sm">{role}</span>
    </div>
  );
};

export default TeamMember;
