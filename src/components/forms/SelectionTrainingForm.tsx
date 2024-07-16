import * as Yup from "yup";
import { useFormik } from "formik";
import GenericButton from "../Buttons/GenericButton";
import SelectInput from "./input/SelectInput";
import SimpleInput from "./input/SimpleInput";
import ErrorMessage from "./error/ErrorMessage";

export default function SelectionTrainingForm() {
  const categoriesFaker = ["JavaScript", "Python", "Java", "C#"];
  const levelFaker = ["Debutant", "Intermediaire", "Avance"];

  const trainingInitialValues = {
    nickname: "",
    category: "",
    level: "",
    nbQuestions: 1,
  };

  const trainingSchema = Yup.object().shape({
    nickname: Yup.string()
      .required("Veuillez rentrer votre de joueur")
      .min(2, "Le nom doit avoir au moins 2 caractères")
      .max(20, "Le nom doit avoir moins de 20 caractères"),
    category: Yup.string().required("Veuillez choisir une catégorie"),
    level: Yup.string().required("Veuillez choisir un niveau de difficulté"),
    nbQuestions: Yup.number()
      .required("Veuillez choisir un niveau de difficulté")
      .min(1, "Doit être au moins 1")
      .max(10, "Ne peut pas être plus de 10"),
  });

  const formik = useFormik({
    initialValues: trainingInitialValues,
    validationSchema: trainingSchema,
    onSubmit: (values) => {
      console.log("Form values: ", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-4 mt-10"
    >
      <SimpleInput
        type="text"
        name="nickname"
        id="nickname"
        placeholder="Your nickname"
        onChange={formik.handleChange}
        value={formik.values.nickname}
      />
      <ErrorMessage
        touched={formik.touched.nickname}
        error={formik.errors.nickname}
      />
      <SelectInput
        name="category"
        id="category"
        placeholder="Choisir une catégorie"
        items={categoriesFaker}
        onChange={formik.handleChange}
        value={formik.values.category}
      />
      <ErrorMessage
        touched={formik.touched.category}
        error={formik.errors.category}
      />
      <SelectInput
        name="level"
        id="level"
        placeholder="Niveau de difficulté"
        items={levelFaker}
        onChange={formik.handleChange}
        value={formik.values.level}
      />
      <ErrorMessage
        touched={formik.touched.level}
        error={formik.errors.level}
      />
      <SimpleInput
        type="number"
        name="nbQuestions"
        id="nbQuestions"
        min={1}
        max={10}
        placeholder="Nombre de questions"
        onChange={formik.handleChange}
        value={formik.values.nbQuestions}
      />
      <ErrorMessage
        touched={formik.touched.nbQuestions}
        error={formik.errors.nbQuestions}
      />
      <GenericButton
        type="submit"
        name="Lancer une session"
        color="bg-light-10 hover:bg-light-hover10"
      />
    </form>
  );
}
