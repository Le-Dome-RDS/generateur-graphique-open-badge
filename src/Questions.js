import { useState } from "react";
import DecisionTree from "./Components/DecisionTree";

function Questions() {
  const [columnMode, setColumnMode] = useState("single");

  const toggleColumnMode = () => {
    const newColumnMode = columnMode === "single" ? "double" : "single";
    setColumnMode(newColumnMode);
  };

  return (
    <>
      <h2>Répondez à ces quelques questions</h2>
      <p id="question-change-column-mode" onClick={toggleColumnMode}>
        <button>
          {columnMode === "single" ? "Comparer" : "Une seule colonne"}
        </button>
      </p>
      <h3>Je veux créer un badge pour reconnaître ...</h3>
      <div className="decision-trees">
        <DecisionTree></DecisionTree>
        {columnMode === "double" && <DecisionTree></DecisionTree>}
      </div>
    </>
  );
}

export default Questions;
