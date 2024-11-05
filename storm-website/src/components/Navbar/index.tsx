import pantera from "../../assets/kiraRoxa.svg";
import NavLink from "./NavLink.tsx";
import clsx from "clsx";
import { useState } from "react";
import Toggler from "./Toggler";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [ativo, setAtivo] = useState(false);

  return (
    <nav className="p-5 block">
      <div className="flex flex-wrap items-center justify-between relative">
        <img src={pantera} alt="kira" className="h-20" />
        <Toggler menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
        <ul
          className={clsx(
            "flex items-center max-xl:overflow-hidden max-xl:flex-col max-xl:w-full max-xl:space-y-5 transition-all duration-300",
            menuAberto ? "max-h-screen max-xl:pt-5" : "max-h-0 "
          )}

        >
          <NavLink texto="HOME" href="/" />
          <NavLink texto="FIRST" href="/first"
          />
          <NavLink texto="ABOUT US" href="/about" />
          <NavLink texto="CONTACT" href="/contact" />
          <NavLink texto="MENTORSHIP" href="/mentor" />
        </ul>
      </div>
    </nav>
  );
}
