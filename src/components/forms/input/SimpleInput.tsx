import React from "react";

interface SimpleInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  min?: number;
  max?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export default function SimpleInput(simpleInputProps: SimpleInputProps) {
  const { type, name, id, min, max, placeholder, onChange, value } =
    simpleInputProps;

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
        className="w-[250px] h-[30px] rounded-sm outline-none p-1 border-light-30 border-solid border"
        onChange={onChange}
        value={value}
      />
    </>
  );
}
