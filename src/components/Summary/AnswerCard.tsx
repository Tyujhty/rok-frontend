import { Link } from "react-router-dom";
import GenericBadge from "../Badges/GenericBadge";
import ThumbDownButton from "../Buttons/ThumbsDownButton";
import ThumbUpButton from "../Buttons/ThumbsUpButton";

import { FaEye } from "react-icons/fa";

interface AnswerCardProps {
  idQuestion: string;
  notation: boolean;
  time: string;
}

export default function AnswerCard(answerCardProps: AnswerCardProps) {
  const { idQuestion, notation, time } = answerCardProps;
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <Link
          to={"/answer/:id"}
          className="underline font-semibold flex items-center gap-2"
        >
          <FaEye className="text-2xl" />
          {idQuestion}
        </Link>
        {notation === true ? (
          <ThumbUpButton pointerEvent="pointer-events-none" />
        ) : (
          <ThumbDownButton pointerEvent="pointer-events-none" />
        )}
        <GenericBadge itemName={time} />
      </div>
    </>
  );
}
