import pantera from "../../assets/Icons/kiraRoxa.svg";
import NavLink from "./NavLink";
import clsx from "clsx";
import { useState } from "react";
import Toggler from "./Toggler";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-5 block">
      <div className="flex flex-wrap items-center justify-between relative">
        <img src={pantera} alt="kira" className="h-20" />
        <Toggler menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

        <ul
          className={clsx(
            "flex items-center max-xl:overflow-hidden max-xl:flex-col max-xl:w-full max-xl:space-y-5 transition-all duration-300",
            menuAberto ? "max-h-screen max-xl:pt-5" : "max-h-0"
          )}
        >
          <NavLink texto="HOME" href="/" />
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-roxo font-black text-4xl hover:border-b-4 border-roxo transition-all duration-200"
            >
              {/* FIRST */}
            </button>
            {isDropdownOpen && (
              <ul className="text-2xl absolute top-full mt-2 border-2 border-roxo rounded shadow-lg hover:border-b-4 transition-all duration-200">
                {/* <li><NavLink texto="FIRST" href="/first" /></li> */}
                <li><NavLink texto="FLL" href="/fll" /></li>
                <li><NavLink texto="FTC" href="/ftc" /></li>
                <li><NavLink texto="FGB" href="/fgc" /></li>
                <li><NavLink texto="FRC" href="/frc" /></li>
              </ul>
            )}
          </li>
          <NavLink texto="ABOUT US" href="/competidores" />
          <NavLink texto="CONTACT" href="/contato" />
          <NavLink texto="RESOURCE" href="/resource" />
        </ul>
      </div>
    </nav>
  );
}