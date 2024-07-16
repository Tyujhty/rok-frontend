interface ThumbsDownButtonProps {
  pointerEvent?: string;
}

import { FaThumbsDown } from "react-icons/fa";
export default function ThumbDownButton(
  thumbsDownButtonProps: ThumbsDownButtonProps
) {
  const { pointerEvent } = thumbsDownButtonProps;
  return (
    <>
      <button
        className={`w-[65px] h-[40px] bg-light-danger hover:bg-light-dangerHover transition-colors flex justify-center items-center rounded-md ${pointerEvent}`}
      >
        <FaThumbsDown className="text-2xl" />
      </button>
    </>
  );
}
