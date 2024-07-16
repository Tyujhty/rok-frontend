import CardBody from "../Card/CardBody";
import AnswerCard from "./AnswerCard";

const answerFaker = [
  {
    id: 1,
    idQuestion: "Question 1",
    notation: true,
    time: "01:00",
  },
  {
    id: 2,
    idQuestion: "Question 2",
    notation: false,
    time: "02:12",
  },
  {
    id: 3,
    idQuestion: "Question 3",
    notation: true,
    time: "01:32",
  },
];

export default function AnswerDetails() {
  return (
    <>
      <CardBody>
        <h3 className="h3-title">Détails par réponse</h3>
        {answerFaker.map((answer) => (
          <AnswerCard key={answer.id} {...answer} />
        ))}
      </CardBody>
    </>
  );
}
