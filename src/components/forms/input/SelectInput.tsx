interface SelectInputProps {
  name: string;
  id: string;
  placeholder: string;
  items: string[];
}

export default function SelectInput(selectInputProps: SelectInputProps) {
  const { name, id, placeholder, items } = selectInputProps;
  return (
    <>
      <label htmlFor="">
        <select
          name={name}
          id={id}
          className="w-[250px] h-[30px] rounded-sm outline-none p-1"
        >
          <option selected disabled>
            {placeholder}
          </option>
          {items.map((item: string, key: number) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
