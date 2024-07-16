import React from "react";

interface SelectInputProps {
  name: string;
  id: string;
  placeholder: string;
  items: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export default function SelectInput(selectInputProps: SelectInputProps) {
  const { name, id, placeholder, items, onChange, value } = selectInputProps;

  return (
    <>
      <label htmlFor={name} hidden></label>
      <select
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        className="w-[250px] h-[30px] rounded-sm outline-none p-1"
      >
        <option value="">{placeholder}</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
