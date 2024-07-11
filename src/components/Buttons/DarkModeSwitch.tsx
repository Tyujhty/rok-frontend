import { useState } from "react";

interface DarkModeSwitchProps {
  switched: boolean;
}

export default function DarkModeSwitch(
  DarkModeSwitchProps: DarkModeSwitchProps
) {
  const { switched } = DarkModeSwitchProps;

  const [isSwitch, setIsSwitch] = useState<boolean>(switched);

  function callback(): void {
    setIsSwitch(!isSwitch);
  }
  return (
    <>
      <label className="relative inline-block w-[60px] h-[30px]">
        <input
          type="checkbox"
          checked={isSwitch}
          onChange={callback}
          className="opacity-0 w-0 h-0 checked:bg-light-60 checked:translate-x-[29px]"
        />
        <span
          className={`absolute top-0 left-0 right-0 bottom-0 duration-300 cursor-pointer rounded-full 
        ${isSwitch ? "bg-light-60" : "bg-light-30"}`}
        >
          <span
            className={`absolute h-[25px] w-[25px] left-[3px] bottom-[2.6px] rounded-full duration-300 
          ${isSwitch ? "bg-light-30 translate-x-[29px]" : "bg-light-60"}`}
          />
        </span>
      </label>
    </>
  );
}
