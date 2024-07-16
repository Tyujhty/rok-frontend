import { FaThumbsDown } from "react-icons/fa";
export default function ThumbDownButton() {
  return (
    <>
      <button className="w-[65px] h-[40px] bg-light-danger hover:bg-light-dangerHover transition-colors flex justify-center items-center rounded-md">
        <FaThumbsDown className="text-2xl" />
      </button>
    </>
  );
}
