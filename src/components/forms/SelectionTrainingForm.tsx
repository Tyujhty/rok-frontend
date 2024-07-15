import GenericButton from "../Buttons/GenericButton";
import SelectInput from "./input/SelectInput";
import SimpleInput from "./input/SimpleInput";

const categoriesFaker = ["JavaScript", "Python", "Java", "C#"];
const levelFaker = ["Debutant", "Intermediaire", "Avance"];

export default function SelectionTrainingForm() {
  return (
    <>
      <form
        action=""
        method="post"
        className="flex flex-col items-center gap-4 mt-10"
      >
        <SimpleInput
          type="text"
          name="nickname"
          id="nickname"
          placeholder="Your nickname"
        />
        <SelectInput
          name="category"
          id="category"
          placeholder="Choisir une catégorie"
          items={categoriesFaker}
        />
        <SelectInput
          name="level"
          id="level"
          placeholder="Niveau de difficulté"
          items={levelFaker}
        />
        <SimpleInput
          type="number"
          name="nbQuestions"
          id="nbQuestions"
          min={1}
          max={10}
          placeholder="Nombre de questions"
        />
        <GenericButton
          type="submit"
          name="Lancer une session"
          color="bg-light-10 hover:bg-light-hover10"
        />
      </form>
    </>
  );
}
