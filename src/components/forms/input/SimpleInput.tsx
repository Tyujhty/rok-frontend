interface SimpleInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

export default function TextInput(simpleInputProps: SimpleInputProps) {
  const { type, name, id, min, max, placeholder } = simpleInputProps;
  return (
    <>
      <label htmlFor={name} hidden></label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        min={min}
        max={max}
        className="w-[250px] h-[30px] rounded-sm outline-none p-1"
      />
    </>
  );
}
