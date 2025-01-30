interface TeamMemberProps {
  name: string;
  role: string;
  photo: string; 
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, photo }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl shadow-lg">
      <img src={photo} alt={name} className="rounded-full w-32 h-32 object-cover mb-4" />
      <h2 className="text-xl font-bold text-roxo">{name}</h2>
      <span className="text-lg text-gray-600">{role}</span>
    </div>
  );
};

 export default TeamMember;
