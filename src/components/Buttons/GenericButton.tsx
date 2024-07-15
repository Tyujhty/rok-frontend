interface GenericButtonProps {
  type: "submit" | "reset" | "button";
  name: string;
  color: string;
}

export default function GenericButton(genericButtonProps: GenericButtonProps) {
  const { type, name, color } = genericButtonProps;

  return (
    <>
      <button
        type={type}
        className={`w-[180px] h-[40px] ${color} rounded-md transition-colors`}
      >
        {name}
      </button>
    </>
  );
}
