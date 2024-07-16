import GenericBadge from "../Badges/GenericBadge";
import CardBody from "../Card/CardBody";

export default function Analysis() {
  return (
    <>
      <CardBody>
        <h3 className="h3-title">Détails de la session</h3>
        <div className="flex justify-between items-center w-full">
          <p className="underline font-semibold">Evaluations positives</p>
          <GenericBadge itemName={"55%"} />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="underline font-semibold">Evaluations négatives</p>
          <GenericBadge itemName={"45%"} />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="underline font-semibold">Temps totale</p>
          <GenericBadge itemName={"10:34"} />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="underline font-semibold">Temps moyen par réponse</p>
          <GenericBadge itemName={"01:12"} />
        </div>
      </CardBody>
    </>
  );
}
