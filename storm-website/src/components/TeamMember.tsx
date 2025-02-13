interface TeamMemberProps {
  name: string;
  role: string;
  photo: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, photo }) => {
  return (
    <div className="">
      <div className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>

      <h2 className="mt-2 text-lg md:text-xl font-bold">{name}</h2>
      <span className="text-gray-300 text-sm md:text-base">{role}</span>
    </div>
  );
};

export default TeamMember;
