import CardBody from "../../components/Card/CardBody";
import SelectionTrainingForm from "../../components/forms/SelectionTrainingForm";

export default function HomePage() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-8">
        <CardBody>
          <h2>Lorem</h2>
          <h2>test container</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            praesentium ut. Perferendis iure, iste nam tempore et illo nihil
            quaerat debitis. Molestias mollitia enim distinctio dignissimos
            doloribus, voluptatum minima error.
          </p>
          <SelectionTrainingForm />
        </CardBody>
      </div>
    </>
  );
}
