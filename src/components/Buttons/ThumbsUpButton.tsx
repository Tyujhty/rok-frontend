import { FaThumbsUp } from "react-icons/fa";

export default function ThumbUpButton() {
  return (
    <>
      <button className="w-[65px] h-[40px] bg-light-10 hover:bg-light-hover10 transition-colors flex justify-center items-center rounded-md">
        <FaThumbsUp className="text-2xl" />
      </button>
    </>
  );
}
