import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/Header/Header";
import QuestionPage from "./pages/Question/QuestionPage";
import AnswerPage from "./pages/Answer/AnswerPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/question" element={<QuestionPage />}></Route>
        <Route path="/answer/:id" element={<AnswerPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
