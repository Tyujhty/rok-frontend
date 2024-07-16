import GenericBadge from "../../components/Badges/GenericBadge";
import GenericButton from "../../components/Buttons/GenericButton";
import CardBody from "../../components/Card/CardBody";
import Timer from "../../components/Timer/Timer";

//TODO: Remove
const categoriesFaker = ["JavaScript", "Python", "Java", "C#"];

export default function QuestionPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <h2 className="h2-title">Question 1/10</h2>
        <CardBody>
          <GenericBadge itemName={categoriesFaker[0]} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            blanditiis neque laudantium provident soluta sequi sed iusto. Cumque
            iure, odit exercitationem eum nulla beatae voluptatem, nam quasi
            expedita quibusdam voluptatibus?
          </p>
        </CardBody>
        <div className="flex justify-between items-center w-[650px]">
          <Timer />
          <GenericButton
            type="button"
            name="Voir la réponse"
            color="bg-light-10 hover:bg-light-hover10"
            to="/answer/:id"
          />
        </div>
      </div>
    </>
  );
}
