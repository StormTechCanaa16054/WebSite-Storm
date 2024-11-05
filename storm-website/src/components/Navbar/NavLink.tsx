export default function NavLink({
    texto,
    href,
  }: {
    texto: string;
    href: string;
  }) {
    return (
      <li className="group relative cursor-pointer">
      <a onClick={() => (location.href = href)} className="mx-4 font-black text-roxo text-4xl">
        {texto}
      </a>
      <div className="absolute top-9 left-0 right-0 h-1 rounded-full max-w-0 group-hover:max-w-full bg-roxo transition-all duration-300" />
    </li>
    );
  }
  