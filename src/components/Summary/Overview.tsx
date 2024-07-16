import GenericBadge from "../Badges/GenericBadge";
import CardBody from "../Card/CardBody";

//TODO: Remove
const categoriesFaker = ["JavaScript", "Python", "Java", "C#"];
const levelFaker = ["Debutant", "Intermediaire", "Avance"];

export default function Overview() {
  return (
    <>
      <CardBody>
        <h3 className="h3-title">Synthèse</h3>
        <div className="flex justify-between items-center w-full">
          <p className="underline font-semibold">Catégorie</p>
          <GenericBadge itemName={categoriesFaker[0]} />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="underline font-semibold">Difficulté</p>
          <GenericBadge itemName={levelFaker[1]} />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="underline font-semibold">Nombre de question</p>
          <GenericBadge itemName={10} />
        </div>
      </CardBody>
    </>
  );
}
