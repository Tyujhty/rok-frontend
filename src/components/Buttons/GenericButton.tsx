import { Link } from "react-router-dom";

interface GenericButtonProps {
  type: "submit" | "reset" | "button";
  name: string;
  color: string;
  to?: string;
}

export default function GenericButton(genericButtonProps: GenericButtonProps) {
  const { type, name, color, to } = genericButtonProps;
  if (to) {
    return (
      <Link
        to={to}
        className={`w-[180px] h-[40px] ${color} rounded-md transition-colors flex items-center justify-center my-4`}
      >
        {name}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`w-[180px] h-[40px] ${color} rounded-md transition-colors`}
    >
      {name}
    </button>
  );
}
