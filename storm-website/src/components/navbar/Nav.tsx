import pantera from "../../assets//Icons/kiraRoxa.svg";

export default function Navbar() {
  return (
    <div className="py-4 pl-7 pr-20">
      <div className="flex justify-between items-center">
        <div>
          <img src={pantera} alt="Logo" className="w-16 h-auto" />
        </div>
        <div className="flex space-x-8 font-black text-roxo">
          <button className="hover:border-b-2 border-roxo transition-all duration-200"> 
            HOME
          </button>

          <button className="hover:border-b-2 border-roxo transition-all duration-200">
            FIRST
          </button>

          <button className="hover:border-b-2 border-roxo transition-all duration-200">
            ABOUT US
          </button>

          <button className="hover:border-b-2 border-roxo transition-all duration-200">
            CONTACT
          </button>

          <button className="hover:border-b-2 border-roxo transition-all duration-200">
            RESOURCE
          </button>
        </div>
      </div>
    </div>
  );
}
