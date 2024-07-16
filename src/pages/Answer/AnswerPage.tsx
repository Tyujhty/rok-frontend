import GenericBadge from "../../components/Badges/GenericBadge";
import ThumbDownButton from "../../components/Buttons/ThumbsDownButton";
import ThumbUpButton from "../../components/Buttons/ThumbsUpButton";
import CardBody from "../../components/Card/CardBody";

//TODO: Remove
const categoriesFaker = ["JavaScript", "Python", "Java", "C#"];

export default function AnswerPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <h2 className="h2-title">Réponse 1/10</h2>
        <CardBody>
          <GenericBadge itemName={categoriesFaker[0]} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            blanditiis neque laudantium provident soluta sequi sed iusto. Cumque
            iure, odit exercitationem eum nulla beatae voluptatem, nam quasi
            expedita quibusdam voluptatibus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Unde blanditiis neque laudantium
            provident soluta sequi sed iusto. Cumque iure, odit exercitationem
            eum nulla beatae voluptatem, nam quasi expedita quibusdam
            voluptatibus?
          </p>
        </CardBody>
        <p className="mt-2 font-semibold text-xl underline">
          J'évalue ma réponse
        </p>
        <div className="flex justify-evenly items-center w-[650px] mt-6">
          <ThumbDownButton />
          <ThumbUpButton />
        </div>
      </div>
    </>
  );
}
