import React from "react";

type PageKey = "FLL" | "FTC" | "FRC" | "FGC";

interface Props {
  activePage: PageKey;
  setActivePage: (page: PageKey) => void;
}

const PageSwitcher: React.FC<Props> = ({ activePage, setActivePage }) => {
  const pages: PageKey[] = ["FLL", "FTC", "FRC", "FGC"];

  return (
    <div className="flex space-x-4 mb-8">
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded-lg font-bold transition duration-300 ${
            activePage === page ? "bg-white text-purple-900" : "bg-purple-700 hover:bg-purple-600"
          }`}
          onClick={() => setActivePage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PageSwitcher;
