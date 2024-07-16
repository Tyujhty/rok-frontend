import Overview from "../../components/Summary/Overview";
import Analysis from "../../components/Summary/Analysis";
import AnswerDetails from "../../components/Summary/AnswerDetails";

export default function SummaryPage() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-8">
        <h2 className="h2-title">Session de Nom du joueur</h2>
        <Overview />
        <Analysis />
        <AnswerDetails />
      </div>
    </>
  );
}
