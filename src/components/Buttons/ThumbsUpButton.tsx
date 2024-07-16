interface ThumbsUpButtonProps {
  pointerEvent?: string;
}

import { FaThumbsUp } from "react-icons/fa";

export default function ThumbUpButton(
  thumbsUpButtonProps: ThumbsUpButtonProps
): JSX.Element {
  const { pointerEvent } = thumbsUpButtonProps;
  return (
    <>
      <button
        className={`w-[65px] h-[40px] bg-light-10 hover:bg-light-hover10 transition-colors flex justify-center items-center rounded-md ${pointerEvent}`}
      >
        <FaThumbsUp className="text-2xl" />
      </button>
    </>
  );
}
