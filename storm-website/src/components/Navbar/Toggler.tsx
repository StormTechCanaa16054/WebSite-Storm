import clsx from "clsx";
import "./Toggler.css";

export default function Toggler({
  menuAberto,
  setMenuAberto,
}: {
  menuAberto: boolean;
  setMenuAberto: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setMenuAberto(!menuAberto)}
      type="button"
      className={clsx(
        "inline-flex items-center aspect-square p-1 ml-3 text-sm text-gray-500 rounded-lg xl:hidden",
        {
          menuAberto,
        }
      )}
    >
      <div className="toggler" />
    </button>
  );
}
