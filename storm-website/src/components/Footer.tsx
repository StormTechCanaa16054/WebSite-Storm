import KiraRoxa from "../assets/Icons/kiraRoxa.svg";
import LogoInstagram from "../assets/Icons/logo-instagram.png";
import LogoYoutube from "../assets/Icons/logo-youtube.png";
export default function Footer() {
  const redesSociais = [
    {
      nome: "Instagram",
      logo: LogoInstagram,
      href: "https://www.instagram.com/stormtechgo/",
    },

    {
      nome: "YouTube",
      logo: LogoYoutube,
      href: "https://www.youtube.com/@stormtechcanaa"
    },
  ];

  return (
    <footer className="py-4 text-roxo">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-8">
          <a
            href={redesSociais[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={redesSociais[0].logo} alt={redesSociais[0].nome} className="size-14" />
          </a>

          <img src={KiraRoxa} className="size-28" />

          <a
            href={redesSociais[1].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={redesSociais[1].logo} alt={redesSociais[1].nome} className="size-14" />
          </a>
        </div>

        <p className="font-bold text-center mt-4 max-md:text-sm mx-3">
          R. Prof. Lázaro Costa, 236 - Vila Canaã, Goiânia - GO, 74415-420
        </p>
      </div>
    </footer>
  );
}

